import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserComponent } from './login-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  declarations: [LoginUserComponent],
  providers: [],
  exports: [LoginUserComponent],
})
export class LoginUserComponentModule {}
