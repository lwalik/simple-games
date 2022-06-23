import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SetUsernameModalComponent } from './set-username-modal.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  declarations: [SetUsernameModalComponent],
  providers: [],
  exports: [SetUsernameModalComponent],
})
export class SetUsernameModalComponentModule {}
