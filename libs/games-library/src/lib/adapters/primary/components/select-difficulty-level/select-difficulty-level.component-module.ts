import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDifficultyLevelComponent } from './select-difficulty-level.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [CommonModule, MatSelectModule],
  declarations: [SelectDifficultyLevelComponent],
  providers: [],
  exports: [SelectDifficultyLevelComponent],
})
export class SelectDifficultyLevelComponentModule {}
