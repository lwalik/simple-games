import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import {
  SETS_USER_DTO,
  SetsUserDtoPort,
} from '../../../application/ports/secondary/dto/sets-user.dto-port';
import {
  SET_CURRENT_USER_COMMAND,
  SetCurrentUserCommandPort,
} from '../../../application/ports/primary/command/set-current-user.command-port';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SetCurrentUserCommand } from '../../../application/ports/primary/command/set-current-user.command';

@Injectable()
export class LoginUserResolver implements Resolve<boolean> {
  constructor(
    private _auth: AngularFireAuth,
    @Inject(SET_CURRENT_USER_COMMAND)
    private _setCurrentUserCommand: SetCurrentUserCommandPort
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._auth.user.pipe(
      switchMap(
        (user) =>
          user && user.email
            ? this._setCurrentUserCommand.setCurrentUser(
                new SetCurrentUserCommand(user?.email as string)
              )
            : of(true) // TODO maybe it should return of(false)
      ),
      switchMap(() => of(true))
    );
  }
}
