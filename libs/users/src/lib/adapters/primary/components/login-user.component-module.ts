import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginUserComponent } from './login-user.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
  ],
  declarations: [LoginUserComponent],
  providers: [],
  exports: [LoginUserComponent],
})
export class LoginUserComponentModule {}
