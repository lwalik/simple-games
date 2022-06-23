import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SetActivePlayersCommand } from './set-active-player.command';

export const SET_ACTIVE_PLAYER_COMMAND =
  new InjectionToken<SetActivePlayerCommandPort>('SET_ACTIVE_PLAYER_COMMAND');

export interface SetActivePlayerCommandPort {
  setActivePlayer(command: SetActivePlayersCommand): Observable<void>;
}
