import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { of, switchMap } from 'rxjs';
import {
  LOGIN_COMMAND,
  LoginCommandPort,
} from '../../../application/ports/primary/command/login.command-port';

@Component({
  selector: 'lib-login-user',
  templateUrl: './login-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginUserComponent {
  readonly userForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  test$ = this._auth.user.pipe(
    switchMap((user) => {
      return of({
        username: user?.displayName,
        email: user?.email,
      });
    })
  );

  constructor(
    @Inject(LOGIN_COMMAND) private _loginCommand: LoginCommandPort,
    private _auth: AngularFireAuth
  ) {}

  onLoginSubmitted(userForm: FormGroup): void {
    if (userForm.invalid) {
      return;
    }

    this._loginCommand
      .login({
        email: userForm.get('email')?.value,
        password: userForm.get('password')?.value,
      })
      .subscribe();
  }
}
