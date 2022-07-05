import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SwitchActiveStatusCommand } from './switch-active-status.command';

export const SWITCH_ACTIVE_STATUS_COMMAND =
  new InjectionToken<SwitchActiveStatusCommandPort>(
    'SWITCH_PLAYER_IN_CONTEXT_STATUS_COMMAND'
  );

export interface SwitchActiveStatusCommandPort {
  switchActiveStatus(command: SwitchActiveStatusCommand): Observable<void>;
}
