import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SetCurrentUserCommand } from './set-current-user.command';

export const SET_CURRENT_USER_COMMAND =
  new InjectionToken<SetCurrentUserCommandPort>('SET_CURRENT_USER_COMMAND');

export interface SetCurrentUserCommandPort {
  setCurrentUser(command: SetCurrentUserCommand): Observable<void>;
}
