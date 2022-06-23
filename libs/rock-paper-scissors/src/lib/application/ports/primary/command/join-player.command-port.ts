import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { JoinPlayerCommand } from './join-player.command';

export const JOIN_PLAYER_COMMAND = new InjectionToken<JoinPlayerCommandPort>(
  'JOIN_PLAYER_COMMAND'
);

export interface JoinPlayerCommandPort {
  joinPlayer(command: JoinPlayerCommand): Observable<void>;
}
