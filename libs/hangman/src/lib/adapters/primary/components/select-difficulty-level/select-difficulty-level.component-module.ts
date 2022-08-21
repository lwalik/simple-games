import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDifficultyLevelComponent } from './select-difficulty-level.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule],
  declarations: [SelectDifficultyLevelComponent],
  providers: [],
  exports: [SelectDifficultyLevelComponent],
})
export class SelectDifficultyLevelComponentModule {}
