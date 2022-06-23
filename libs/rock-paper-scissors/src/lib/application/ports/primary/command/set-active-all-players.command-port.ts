import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SetActiveAllPlayersCommand } from './set-active-all-players.command';

export const SET_ACTIVE_ALL_PLAYERS_COMMAND =
  new InjectionToken<SetActiveAllPlayersCommandPort>(
    'SET_ACTIVE_ALL_PLAYERS_COMMAND'
  );

export interface SetActiveAllPlayersCommandPort {
  setActiveAllPlayers(command: SetActiveAllPlayersCommand): Observable<void>;
}
