import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from './user.dto';

export const GETS_ALL_USER_DTO = new InjectionToken<GetsAllUserDtoPort>('GETS_ALL_USER_DTO');

export interface GetsAllUserDtoPort {
  getAll(): Observable<UserDTO[]>;
}
