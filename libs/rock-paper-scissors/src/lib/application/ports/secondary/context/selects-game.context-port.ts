import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { GameContext } from './game.context';

export const SELECTS_GAME_CONTEXT = new InjectionToken<SelectsGameContextPort>(
  'SELECTS_GAME_CONTEXT'
);

export interface SelectsGameContextPort {
  select(): Observable<GameContext>;
}
