import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { UserContext } from './user.context';

export const SETS_STATE_USER_CONTEXT =
  new InjectionToken<SetsStateUserContextPort>('SETS_STATE_USER_CONTEXT');

export interface SetsStateUserContextPort {
  setState(state: UserContext): Observable<void>;
}
