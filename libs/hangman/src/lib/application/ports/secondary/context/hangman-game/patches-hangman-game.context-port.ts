import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { HangmanGameContext } from './hangman-game.context';

export const PATCHES_HANGMAN_GAME_CONTEXT =
  new InjectionToken<PatchesHangmanGameContextPort>(
    'PATCHES_HANGMAN_GAME_CONTEXT'
  );

export interface PatchesHangmanGameContextPort {
  patch(state: Partial<HangmanGameContext>): Observable<void>;
}
