import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginUserComponent } from './login-user.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, MatInputModule, ReactiveFormsModule],
  declarations: [LoginUserComponent],
  providers: [],
  exports: [LoginUserComponent],
})
export class LoginUserComponentModule {}
