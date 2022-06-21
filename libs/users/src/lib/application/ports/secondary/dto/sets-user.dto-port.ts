import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from './user.dto';

export const SETS_USER_DTO = new InjectionToken<SetsUserDtoPort>(
  'SETS_USER_DTO'
);

export interface SetsUserDtoPort {
  set(user: Partial<UserDTO>): Observable<void>;
}
