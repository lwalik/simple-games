import { Inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { GetsAllLettersQueryPort } from '../ports/primary/query/gets-all-letters.query-port';
import { InitLettersCommandPort } from '../ports/primary/command/init-letters.command-port';
import {
  SETS_STATE_HANGMAN_GAME_CONTEXT,
  SetsStateHangmanGameContextPort,
} from '../ports/secondary/context/hangman-game/sets-state-hangman-game.context-port';
import {
  SETS_STATE_LETTERS_CONTEXT,
  SetsStateLettersContextPort,
} from '../ports/secondary/context/letters/sets-state-letters.context-port';
import {
  SELECTS_LETTERS_CONTEXT,
  SelectsLettersContextPort,
} from '../ports/secondary/context/letters/selects-letters.context-port';
import { LettersQuery } from '../ports/primary/query/letters.query';
import { InitLettersCommand } from '../ports/primary/command/init-letters.command';

@Injectable()
export class HangmanGameState
  implements GetsAllLettersQueryPort, InitLettersCommandPort
{
  constructor(
    @Inject(SETS_STATE_HANGMAN_GAME_CONTEXT)
    private _setsStateHangmanGameContext: SetsStateHangmanGameContextPort,
    @Inject(SETS_STATE_LETTERS_CONTEXT)
    private _setsStateLettersContext: SetsStateLettersContextPort,
    @Inject(SELECTS_LETTERS_CONTEXT)
    private _selectsLettersContext: SelectsLettersContextPort
  ) {}

  getAllLettersQuery(): Observable<LettersQuery[]> {
    return this._selectsLettersContext
      .select()
      .pipe(map((context) => context.letters));
  }

  initLetters(command: InitLettersCommand): Observable<void> {
    return this._setsStateLettersContext.setState({
      letters: [
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
      ],
    });
  }
}
