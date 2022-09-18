import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectPlayerCountComponent } from './select-player-count.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule],
  declarations: [SelectPlayerCountComponent],
  providers: [],
  exports: [SelectPlayerCountComponent],
})
export class SelectPlayerCountComponentModule {}
