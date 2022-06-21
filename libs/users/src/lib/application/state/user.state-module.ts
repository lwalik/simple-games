import { NgModule } from '@angular/core';
import { UserState } from './user.state';
import { LOGIN_COMMAND } from '../ports/primary/command/login.command-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [UserState, { provide: LOGIN_COMMAND, useExisting: UserState }],
  exports: [],
})
export class UserStateModule {}
