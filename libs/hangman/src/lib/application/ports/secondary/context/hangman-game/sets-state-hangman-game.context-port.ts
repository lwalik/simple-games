import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { HangmanGameContext } from './hangman-game.context';

export const SETS_STATE_HANGMAN_GAME_CONTEXT =
  new InjectionToken<SetsStateHangmanGameContextPort>(
    'SETS_STATE_HANGMAN_GAME_CONTEXT'
  );

export interface SetsStateHangmanGameContextPort {
  setState(state: HangmanGameContext): Observable<void>;
}
