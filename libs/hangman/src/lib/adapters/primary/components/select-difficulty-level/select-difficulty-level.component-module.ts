import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDifficultyLevelComponent } from './select-difficulty-level.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  declarations: [SelectDifficultyLevelComponent],
  providers: [],
  exports: [SelectDifficultyLevelComponent],
})
export class SelectDifficultyLevelComponentModule {}
