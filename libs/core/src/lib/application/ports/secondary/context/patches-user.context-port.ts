import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { UserContext } from './user.context';

export const PATCHES_USER_CONTEXT = new InjectionToken<PatchesUserContextPort>(
  'PATCHES_USER_CONTEXT'
);

export interface PatchesUserContextPort {
  patch(state: Partial<UserContext>): Observable<void>;
}
