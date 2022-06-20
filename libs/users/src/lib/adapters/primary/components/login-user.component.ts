import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, take } from 'rxjs';
import { UserDTO } from '../../../application/ports/secondary/dto/user.dto';
import {
  GETS_ALL_USER_DTO,
  GetsAllUserDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-user.dto-port';
import {
  SETS_STATE_USER_CONTEXT,
  SetsStateUserContextPort,
} from 'libs/core/src/lib/application/ports/secondary/context/sets-state-user.context-port';

@Component({
  selector: 'lib-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['../../../../assets/styles/animations.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginUserComponent {
  readonly loginUser: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  user$: Observable<UserDTO[]> = this._getsAllUserDto.getAll();

  constructor(
    @Inject(GETS_ALL_USER_DTO) private _getsAllUserDto: GetsAllUserDtoPort,
    @Inject(SETS_STATE_USER_CONTEXT)
    private _setsStateUserContext: SetsStateUserContextPort
  ) {}

  onLoginSubmited(loginUser: FormGroup): void {
    if (loginUser.invalid) {
      return;
    }

    this._setsStateUserContext
      .setState({
        username: loginUser.get('username')?.value,
      })
      .pipe(take(1));
  }
}
