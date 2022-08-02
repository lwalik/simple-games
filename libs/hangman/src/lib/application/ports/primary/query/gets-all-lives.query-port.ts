import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { LivesQuery } from './lives.query';

export const GETS_ALL_LIVES_QUERY = new InjectionToken<GetsAllLivesQueryPort>(
  'GETS_ALL_LIVES_QUERY'
);

export interface GetsAllLivesQueryPort {
  getAllLivesQuery(): Observable<LivesQuery>;
}
