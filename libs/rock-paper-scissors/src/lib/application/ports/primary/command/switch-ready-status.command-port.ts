import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SwitchReadyStatusCommand } from './switch-ready-status.command';

export const SWITCH_READY_STATUS_COMMAND =
  new InjectionToken<SwitchReadyStatusCommandPort>(
    'SWITCH_READY_STATUS_COMMAND'
  );

export interface SwitchReadyStatusCommandPort {
  switchReadyStatus(command: SwitchReadyStatusCommand): Observable<void>;
}
