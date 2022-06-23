import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SetUsernameCommand } from './set-username.command';

export const SET_USERNAME_COMMAND = new InjectionToken<SetUsernameCommandPort>(
  'SET_USERNAME_COMMAND'
);

export interface SetUsernameCommandPort {
  setUsername(command: SetUsernameCommand): Observable<void>;
}
