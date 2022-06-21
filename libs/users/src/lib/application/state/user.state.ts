import { Inject, Injectable } from '@angular/core';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { LoginCommandPort } from '../ports/primary/command/login.command-port';
import {
  SETS_USER_DTO,
  SetsUserDtoPort,
} from '../ports/secondary/dto/sets-user.dto-port';
import { LoginCommand } from '../ports/primary/command/login.command';
import {
  SETS_STATE_USER_CONTEXT,
  SetsStateUserContextPort,
} from 'libs/core/src/lib/application/ports/secondary/context/sets-state-user.context-port';

@Injectable()
export class UserState implements LoginCommandPort {
  constructor(
    @Inject(SETS_USER_DTO) private _setsUserDto: SetsUserDtoPort,
    @Inject(SETS_STATE_USER_CONTEXT)
    private _setsStateUserContext: SetsStateUserContextPort
  ) {}

  login(command: LoginCommand): Observable<void> {
    return this._setsUserDto
      .set({
        email: command.email,
        password: command.password,
      })
      .pipe(
        switchMap(() =>
          this._setsStateUserContext.setState({ email: command.email })
        )
      );
  }
}
