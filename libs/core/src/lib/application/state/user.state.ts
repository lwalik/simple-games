import { Inject, Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { SetCurrentUserCommandPort } from '../ports/primary/command/set-current-user.command-port';
import {
  SETS_STATE_USER_CONTEXT,
  SetsStateUserContextPort,
} from '../ports/secondary/context/sets-state-user.context-port';
import {
  SELECTS_USER_CONTEXT,
  SelectsUserContextPort,
} from '../ports/secondary/context/selects-user.context-port';
import { SetCurrentUserCommand } from '../ports/primary/command/set-current-user.command';

@Injectable()
export class UserState implements SetCurrentUserCommandPort {
  constructor(
    @Inject(SETS_STATE_USER_CONTEXT)
    private _setsStateUserContext: SetsStateUserContextPort,
    @Inject(SELECTS_USER_CONTEXT)
    private _selectsUserContext: SelectsUserContextPort
  ) {}

  setCurrentUser(command: SetCurrentUserCommand): Observable<void> {
    return of(void 0);
  }
}
