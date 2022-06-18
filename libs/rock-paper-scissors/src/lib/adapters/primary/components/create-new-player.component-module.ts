import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateNewPlayerComponent } from './create-new-player.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CreateNewPlayerComponent],
  providers: [],
  exports: [CreateNewPlayerComponent],
})
export class CreateNewPlayerComponentModule {}
