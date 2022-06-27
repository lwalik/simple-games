import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PickModalComponent } from './pick-modal.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [PickModalComponent],
  providers: [],
  exports: [PickModalComponent],
})
export class PickModalComponentModule {}
