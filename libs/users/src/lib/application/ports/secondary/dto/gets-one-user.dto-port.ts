import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from './user.dto';

export const GETS_ONE_USER_DTO = new InjectionToken<GetsOneUserDtoPort>(
  'GETS_ONE_USER_DTO'
);

export interface GetsOneUserDtoPort {
  getOne(id: string): Observable<UserDTO>;
}
