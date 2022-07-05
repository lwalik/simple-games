import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { IsQueueVisibleQuery } from './is-queue-visible.query';

export const GETS_CURRENT_IS_QUEUE_VISIBLE_QUERY =
  new InjectionToken<GetsCurrentIsQueueVisibleQueryPort>(
    'GETS_CURRENT_IS_QUEUE_VISIBLE_QUERY'
  );

export interface GetsCurrentIsQueueVisibleQueryPort {
  getCurrentIsQueueVisibleQuery(): Observable<IsQueueVisibleQuery>;
}
