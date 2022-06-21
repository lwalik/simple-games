import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCommand } from './login.command';

export const LOGIN_COMMAND = new InjectionToken<LoginCommandPort>(
  'LOGIN_COMMAND'
);

export interface LoginCommandPort {
  login(command: LoginCommand): Observable<void>;
}
