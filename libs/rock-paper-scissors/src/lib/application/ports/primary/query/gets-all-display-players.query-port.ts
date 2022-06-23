import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DisplayPlayersQuery } from './display-players.query';

export const GETS_ALL_DISPLAY_PLAYERS_QUERY =
  new InjectionToken<GetsAllDisplayPlayersQueryPort>(
    'GETS_ALL_DISPLAY_PLAYERS_QUERY'
  );

export interface GetsAllDisplayPlayersQueryPort {
  getAllDisplayPlayersQuery(): Observable<void>;
}
