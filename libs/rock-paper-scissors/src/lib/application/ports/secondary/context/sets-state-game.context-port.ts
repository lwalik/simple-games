import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { GameContext } from './game.context';

export const SETS_STATE_GAME_CONTEXT =
  new InjectionToken<SetsStateGameContextPort>('SETS_STATE_GAME_CONTEXT');

export interface SetsStateGameContextPort {
  setState(state: GameContext): Observable<void>;
}
