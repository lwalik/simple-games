import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { HangmanGameContext } from './hangman-game.context';

export const SELECTS_HANGMAN_GAME_CONTEXT =
  new InjectionToken<SelectsHangmanGameContextPort>(
    'SELECTS_HANGMAN_GAME_CONTEXT'
  );

export interface SelectsHangmanGameContextPort {
  select(): Observable<HangmanGameContext>;
}
