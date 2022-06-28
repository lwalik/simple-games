import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ResetQueueStatusCommand } from './reset-queue-status.command';

export const RESET_QUEUE_STATUS_COMMAND =
  new InjectionToken<ResetQueueStatusCommandPort>('RESET_QUEUE_STATUS_COMMAND');

export interface ResetQueueStatusCommandPort {
  resetQueueStatus(command: ResetQueueStatusCommand): Observable<void>;
}
