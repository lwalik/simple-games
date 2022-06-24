import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SwitchPlayerInContextStatusCommand } from './switch-player-in-context-status.command';

export const SWITCH_PLAYER_IN_CONTEXT_STATUS_COMMAND =
  new InjectionToken<SwitchPlayerInContextStatusCommandPort>(
    'SWITCH_PLAYER_IN_CONTEXT_STATUS_COMMAND'
  );

export interface SwitchPlayerInContextStatusCommandPort {
  switchPlayerInContextStatus(
    command: SwitchPlayerInContextStatusCommand
  ): Observable<void>;
}
