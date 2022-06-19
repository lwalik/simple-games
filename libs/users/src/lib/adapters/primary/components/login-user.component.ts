import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['../../../../assets/styles/animations.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginUserComponent {
  readonly loginUser: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor() {}

  onLoginSubmited(loginUser: FormGroup): void {
    if (loginUser.invalid) {
      return;
    }
  }
}
