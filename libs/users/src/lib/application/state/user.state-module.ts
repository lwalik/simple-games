import { NgModule } from '@angular/core';
import { UserState } from './user.state';
import { LOGIN_COMMAND } from '../ports/primary/command/login.command-port';
import { SET_CURRENT_USER_COMMAND } from '../ports/primary/command/set-current-user.command-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    UserState,
    { provide: LOGIN_COMMAND, useExisting: UserState },
    { provide: SET_CURRENT_USER_COMMAND, useExisting: UserState },
  ],
  exports: [],
})
export class UserStateModule {}
