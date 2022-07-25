import { Inject, Injectable } from '@angular/core';
import { Observable, of, switchMap, take, tap } from 'rxjs';
import { GetsAllLettersQueryPort } from '../ports/primary/query/gets-all-letters.query-port';
import { SelectLetterCommandPort } from '../ports/primary/command/select-letter.command-port';
import { InitHangmanGameCommandPort } from '../ports/primary/command/init-hangman-game.command-port';
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
import { LettersQuery } from '../ports/primary/query/letters.query';
import { SelectLetterCommand } from '../ports/primary/command/select-letter.command';
import { InitHangmanGameCommand } from '../ports/primary/command/init-hangman-game.command';

@Injectable()
export class HangmanGameState
  implements
    GetsAllLettersQueryPort,
    SelectLetterCommandPort,
    InitHangmanGameCommandPort
{
  constructor(
    @Inject(SETS_STATE_HANGMAN_GAME_CONTEXT)
    private _setsStateHangmanGameContext: SetsStateHangmanGameContextPort,
    @Inject(PATCHES_HANGMAN_GAME_CONTEXT)
    private _patchesHangmanGameContext: PatchesHangmanGameContextPort,
    @Inject(SELECTS_HANGMAN_GAME_CONTEXT)
    private _selectsHangmanGameContext: SelectsHangmanGameContextPort
  ) {}

  getAllLettersQuery(): Observable<LettersQuery[]> {
    return of([
      { letter: 'Q', isDisabled: false },
      { letter: 'W', isDisabled: false },
      { letter: 'E', isDisabled: false },
      { letter: 'R', isDisabled: false },
      { letter: 'T', isDisabled: false },
      { letter: 'Y', isDisabled: false },
      { letter: 'U', isDisabled: false },
      { letter: 'I', isDisabled: false },
      { letter: 'O', isDisabled: false },
      { letter: 'P', isDisabled: false },
      { letter: 'A', isDisabled: false },
      { letter: 'S', isDisabled: false },
      { letter: 'D', isDisabled: false },
      { letter: 'F', isDisabled: false },
      { letter: 'G', isDisabled: false },
      { letter: 'H', isDisabled: false },
      { letter: 'J', isDisabled: false },
      { letter: 'K', isDisabled: false },
      { letter: 'L', isDisabled: false },
      { letter: 'Z', isDisabled: false },
      { letter: 'X', isDisabled: false },
      { letter: 'C', isDisabled: false },
      { letter: 'V', isDisabled: false },
      { letter: 'B', isDisabled: false },
      { letter: 'N', isDisabled: false },
      { letter: 'M', isDisabled: false },
    ]);
  }

  selectLetter(command: SelectLetterCommand): Observable<void> {
    return this._selectsHangmanGameContext.select().pipe(
      take(1),
      switchMap((context) =>
        this._patchesHangmanGameContext.patch({
          ...context,
          selectedLetters: [...context.selectedLetters, command.letter],
        })
      )
    );
  }

  initHangmanGame(command: InitHangmanGameCommand): Observable<void> {
    return this._setsStateHangmanGameContext.setState({
      username: '',
      level: 'low',
      selectedLetters: [],
      words: [],
    });
  }
}
