import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { IsPlayerInContextQuery } from './is-player-in-context.query';

export const GETS_CURRENT_IS_PLAYER_IN_CONTEXT_QUERY =
  new InjectionToken<GetsCurrentIsPlayerInContextQueryPort>(
    'GETS_CURRENT_IS_PLAYER_IN_CONTEXT_QUERY'
  );

export interface GetsCurrentIsPlayerInContextQueryPort {
  getCurrentIsPlayerInContextQuery(): Observable<IsPlayerInContextQuery>;
}
