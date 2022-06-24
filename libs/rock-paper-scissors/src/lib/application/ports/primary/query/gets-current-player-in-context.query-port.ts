import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerInContextQuery } from './player-in-context.query';

export const GETS_CURRENT_PLAYER_IN_CONTEXT_QUERY =
  new InjectionToken<GetsCurrentPlayerInContextQueryPort>(
    'GETS_CURRENT_PLAYER_IN_CONTEXT_QUERY'
  );

export interface GetsCurrentPlayerInContextQueryPort {
  getCurrentPlayerInContextQuery(): Observable<PlayerInContextQuery>;
}
