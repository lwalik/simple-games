import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { InGameQuery } from './in-game.query';

export const GETS_CURRENT_IN_GAME_QUERY =
  new InjectionToken<GetsCurrentInGameQueryPort>('GETS_CURRENT_IN_GAME_QUERY');

export interface GetsCurrentInGameQueryPort {
  getCurrentInGameQuery(): Observable<InGameQuery>;
}
