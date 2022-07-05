import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DisplayPlayerResultQuery } from './display-player-result.query';

export const GETS_ALL_DISPLAY_PLAYER_RESULT_QUERY =
  new InjectionToken<GetsAllDisplayPlayerResultQueryPort>(
    'GETS_ALL_DISPLAY_PLAYER_RESULT_QUERY'
  );

export interface GetsAllDisplayPlayerResultQueryPort {
  getAllDisplayPlayerResultQuery(): Observable<DisplayPlayerResultQuery[]>;
}
