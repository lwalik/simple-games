import { Inject, Injectable } from '@angular/core';
import { combineLatest, Observable, of, tap } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { GetsAllLettersQueryPort } from '../ports/primary/query/gets-all-letters.query-port';
import { SelectLetterCommandPort } from '../ports/primary/command/select-letter.command-port';
import { InitHangmanGameCommandPort } from '../ports/primary/command/init-hangman-game.command-port';
import { GetsCurrentSelectedWordQueryPort } from '../ports/primary/query/gets-current-selected-word.query-port';
import { TakeWordCommandPort } from '../ports/primary/command/take-word.command-port';
import { GetsAllLivesQueryPort } from '../ports/primary/query/gets-all-lives.query-port';
import { ResetLettersCommandPort } from '../ports/primary/command/reset-letters.command-port';
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
import { LetterQuery } from '../ports/primary/query/letter.query';
import { SelectLetterCommand } from '../ports/primary/command/select-letter.command';
import { InitHangmanGameCommand } from '../ports/primary/command/init-hangman-game.command';
import { SelectedWordQuery } from '../ports/primary/query/selected-word.query';
import { HangmanGameContext } from '../ports/secondary/context/hangman-game/hangman-game.context';
import { TakeWordCommand } from '../ports/primary/command/take-word.command';
import { LivesQuery } from '../ports/primary/query/lives.query';
import { ResetLettersCommand } from '../ports/primary/command/reset-letters.command';
import { LettersContext } from '../ports/secondary/context/letters/letters.context';

@Injectable()
export class HangmanGameState
  implements
    GetsAllLettersQueryPort,
    SelectLetterCommandPort,
    InitHangmanGameCommandPort,
    GetsCurrentSelectedWordQueryPort,
    TakeWordCommandPort,
    GetsAllLivesQueryPort,
    ResetLettersCommandPort
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
    private _setsStateLettersContext: SetsStateLettersContextPort
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
    return this._selectsHangmanGameContext.select().pipe(
      take(1),
      switchMap((context) =>
        this._patchesHangmanGameContext.patch({
          ...context,
          selectedLetters: [...context.selectedLetters, command.letter],
          livesCount:
            context.currentWord.includes(command.letter) ||
            context.livesCount === 0
              ? context.livesCount
              : context.livesCount - 1,
        })
      )
    );
  }

  initHangmanGame(command: InitHangmanGameCommand): Observable<void> {
    return this._getsOneHangmanGameDto.getOne().pipe(
      tap(() => this._setsStateLettersContext.setState()),
      switchMap((game) =>
        this._setsStateHangmanGameContext.setState({
          username: '',
          selectedLevel: command.level,
          selectedLetters: [],
          words: game.secretWords.filter(
            (item) => item.level === command.level
          )[0].words,
          currentWord: '',
          livesCount: 6,
        })
      )
    );
  }

  getCurrentSelectedWordQuery(): Observable<SelectedWordQuery> {
    return this._selectsHangmanGameContext
      .select()
      .pipe(
        map(
          (hangmanGameContext: HangmanGameContext): SelectedWordQuery =>
            new SelectedWordQuery(hangmanGameContext.currentWord)
        )
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
    return of(void 0);
  }
}
