import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { QueueStatusQuery } from './queue-status.query';

export const GETS_CURRENT_QUEUE_STATUS_QUERY =
  new InjectionToken<GetsCurrentQueueStatusQueryPort>(
    'GETS_CURRENT_QUEUE_STATUS_QUERY'
  );

export interface GetsCurrentQueueStatusQueryPort {
  getCurrentQueueStatusQuery(): Observable<QueueStatusQuery>;
}
