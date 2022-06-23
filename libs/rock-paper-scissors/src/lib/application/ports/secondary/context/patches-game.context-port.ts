import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { GameContext } from './game.context';

export const PATCHES_GAME_CONTEXT = new InjectionToken<PatchesGameContextPort>(
  'PATCHES_GAME_CONTEXT'
);

export interface PatchesGameContextPort {
  patch(state: Partial<GameContext>): Observable<void>;
}
