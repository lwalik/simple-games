import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseUsersServiceModule, LoginUserComponentModule } from '@users';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: LoginPage,
      },
    ]),
    LoginUserComponentModule,
    FirebaseUsersServiceModule,
  ],
  declarations: [LoginPage],
  providers: [],
  exports: [],
})
export class LoginPageModule {}
