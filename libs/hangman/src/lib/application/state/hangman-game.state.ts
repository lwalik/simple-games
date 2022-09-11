import { Inject, Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { GetsAllLettersQueryPort } from '../ports/primary/query/gets-all-letters.query-port';
import { SelectLetterCommandPort } from '../ports/primary/command/select-letter.command-port';
import { InitHangmanGameCommandPort } from '../ports/primary/command/init-hangman-game.command-port';
import { GetsCurrentSelectedWordQueryPort } from '../ports/primary/query/gets-current-selected-word.query-port';
import { TakeWordCommandPort } from '../ports/primary/command/take-word.command-port';
import { GetsAllLivesQueryPort } from '../ports/primary/query/gets-all-lives.query-port';
import { ResetLettersCommandPort } from '../ports/primary/command/reset-letters.command-port';
import { SelectDifficultyLevelCommandPort } from '../ports/primary/command/select-difficulty-level.command-port';
import { TakeSecretWordsCommandPort } from '../ports/primary/command/take-secret-words.command-port';
import { InitHangmanBoardCommandPort } from '../ports/primary/command/init-hangman-board.command-port';
import { IsGameOverQueryPort } from '../ports/primary/query/is-game-over.query-port';
import {
  SETS_STATE_HANGMAN_GAME_CONTEXT,
  SetsStateHangmanGameContextPort,
} from '../ports/secondary/context/hangman-game/sets-state-hangman-game.context-port';
import {
  PATCHES_HANGMAN_GAME_CONTEXT,
  PatchesHangmanGameContextPort,
} from '../ports/secondary/context/hangman-game/patches-hangman-game.context-port';
import {
  SELECTS_HANGMAN_GAME_CONTEXT,
  SelectsHangmanGameContextPort,
} from '../ports/secondary/context/hangman-game/selects-hangman-game.context-port';
import {
  GETS_ONE_HANGMAN_GAME_DTO,
  GetsOneHangmanGameDtoPort,
} from '../ports/secondary/dto/gets-one-hangman-game.dto-port';
import {
  SELECTS_LETTERS_CONTEXT,
  SelectsLettersContextPort,
} from '../ports/secondary/context/letters/selects-letters.context-port';
import {
  SETS_STATE_LETTERS_CONTEXT,
  SetsStateLettersContextPort,
} from '../ports/secondary/context/letters/sets-state-letters.context-port';
import {
  PATCHES_LETTERS_CONTEXT,
  PatchesLettersContextPort,
} from '../ports/secondary/context/letters/patches-letters.context-port';
import { LetterQuery } from '../ports/primary/query/letter.query';
import { SelectLetterCommand } from '../ports/primary/command/select-letter.command';
import { HangmanGameContext } from '../ports/secondary/context/hangman-game/hangman-game.context';
import { InitHangmanGameCommand } from '../ports/primary/command/init-hangman-game.command';
import { SelectedWordQuery } from '../ports/primary/query/selected-word.query';
import { TakeWordCommand } from '../ports/primary/command/take-word.command';
import { LivesQuery } from '../ports/primary/query/lives.query';
import { ResetLettersCommand } from '../ports/primary/command/reset-letters.command';
import { SelectDifficultyLevelCommand } from '../ports/primary/command/select-difficulty-level.command';
import { TakeSecretWordsCommand } from '../ports/primary/command/take-secret-words.command';
import { GameOverQuery } from '../ports/primary/query/game-over.query';

@Injectable()
export class HangmanGameState
  implements
    GetsAllLettersQueryPort,
    SelectLetterCommandPort,
    InitHangmanGameCommandPort,
    GetsCurrentSelectedWordQueryPort,
    TakeWordCommandPort,
    GetsAllLivesQueryPort,
    ResetLettersCommandPort,
    SelectDifficultyLevelCommandPort,
    TakeSecretWordsCommandPort,
    InitHangmanBoardCommandPort,
    IsGameOverQueryPort
{
  constructor(
    @Inject(SETS_STATE_HANGMAN_GAME_CONTEXT)
    private _setsStateHangmanGameContext: SetsStateHangmanGameContextPort,
    @Inject(PATCHES_HANGMAN_GAME_CONTEXT)
    private _patchesHangmanGameContext: PatchesHangmanGameContextPort,
    @Inject(SELECTS_HANGMAN_GAME_CONTEXT)
    private _selectsHangmanGameContext: SelectsHangmanGameContextPort,
    @Inject(GETS_ONE_HANGMAN_GAME_DTO)
    private _getsOneHangmanGameDto: GetsOneHangmanGameDtoPort,
    @Inject(SELECTS_LETTERS_CONTEXT)
    private _selectsLettersContext: SelectsLettersContextPort,
    @Inject(SETS_STATE_LETTERS_CONTEXT)
    private _setsStateLettersContext: SetsStateLettersContextPort,
    @Inject(PATCHES_LETTERS_CONTEXT)
    private _patchesLettersContext: PatchesLettersContextPort
  ) {}

  getAllLettersQuery(): Observable<LetterQuery[]> {
    return this._selectsLettersContext
      .select()
      .pipe(
        map((lettersContext) =>
          lettersContext.letters.map(
            (letter) => new LetterQuery(letter.letter, letter.isDisabled)
          )
        )
      );
  }

  selectLetter(command: SelectLetterCommand): Observable<void> {
    return combineLatest([
      this._selectsHangmanGameContext.select(),
      this._selectsLettersContext.select(),
    ]).pipe(
      take(1),
      switchMap(([HangmanGameContext, LettersContext]) =>
        this._patchesHangmanGameContext
          .patch({
            ...HangmanGameContext,
            selectedLetters: [
              ...HangmanGameContext.selectedLetters,
              command.letter,
            ],
            livesCount:
              HangmanGameContext.currentWord.includes(command.letter) ||
              HangmanGameContext.livesCount === 0
                ? HangmanGameContext.livesCount
                : HangmanGameContext.livesCount - 1,
          })
          .pipe(
            take(1),
            switchMap(() =>
              this._patchesLettersContext.patch({
                letters: LettersContext.letters.map((letter) =>
                  letter.letter === command.letter
                    ? { letter: command.letter, isDisabled: true }
                    : letter
                ),
              })
            )
          )
      )
    );
  }

  initHangmanGame(command: InitHangmanGameCommand): Observable<void> {
    return this._setsStateHangmanGameContext
      .setState({
        username: '',
        selectedLevel: '',
        selectedLetters: [],
        words: [],
        currentWord: '',
        livesCount: 6,
      })
      .pipe(switchMap(() => this._setsStateLettersContext.setState()));
  }

  getCurrentSelectedWordQuery(): Observable<SelectedWordQuery> {
    return this._selectsHangmanGameContext.select().pipe(
      map((context) =>
        [...context.currentWord].map((letter) =>
          context.selectedLetters.includes(letter) ? letter : ''
        )
      ),
      map((word) => new SelectedWordQuery(word))
    );
  }

  takeWord(command: TakeWordCommand): Observable<void> {
    return this._selectsHangmanGameContext.select().pipe(
      take(1),
      map((context) => ({
        ...context,
        words: context.words.sort(() => Math.random() - 0.5),
      })),
      switchMap((context) =>
        this._patchesHangmanGameContext.patch({
          words: context.words.slice(0, -1),
          currentWord: context.words.slice(-1)[0] as string,
          selectedLetters: [],
        })
      )
    );
  }

  getAllLivesQuery(): Observable<LivesQuery> {
    return this._selectsHangmanGameContext
      .select()
      .pipe(
        map(
          (hangmanGameContext: HangmanGameContext): LivesQuery =>
            new LivesQuery(hangmanGameContext.livesCount)
        )
      );
  }

  resetLetter(command: ResetLettersCommand): Observable<void> {
    return this._setsStateLettersContext.setState();
  }

  selectDifficultyLevel(
    command: SelectDifficultyLevelCommand
  ): Observable<void> {
    return this._patchesHangmanGameContext.patch({
      selectedLevel: command.selectedLevel,
    });
  }

  takeSecretWords(command: TakeSecretWordsCommand): Observable<void> {
    return combineLatest([
      this._getsOneHangmanGameDto.getOne(),
      this._selectsHangmanGameContext.select(),
    ]).pipe(
      take(1),
      switchMap(([hangmanGameDto, context]) =>
        this._patchesHangmanGameContext.patch({
          words: hangmanGameDto.secretWords.find(
            (item) => item.level === context.selectedLevel
          )?.words,
        })
      )
    );
  }

  initHangmanBoard(command: InitHangmanGameCommand): Observable<void> {
    return this._setsStateLettersContext.setState().pipe(
      switchMap(() =>
        this._selectsHangmanGameContext.select().pipe(
          take(1),
          map((context) => ({
            ...context,
            words: context.words.sort(() => Math.random() - 0.5),
          })),
          switchMap((context) =>
            this._patchesHangmanGameContext.patch({
              words: context.words.slice(0, -1),
              currentWord: context.words.slice(-1)[0] as string,
              selectedLetters: [],
            })
          )
        )
      )
    );
  }

  isGameOverQuery(): Observable<GameOverQuery> {
    return this._selectsHangmanGameContext
      .select()
      .pipe(map((context) => new GameOverQuery(context.livesCount === 0)));
  }
}
