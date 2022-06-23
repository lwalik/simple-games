import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { UserContext } from './user.context';

export const SELECTS_USER_CONTEXT = new InjectionToken<SelectsUserContextPort>(
  'SELECTS_USER_CONTEXT'
);

export interface SelectsUserContextPort {
  select(): Observable<UserContext>;
}
