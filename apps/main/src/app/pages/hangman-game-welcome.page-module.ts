import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HangmanGameWelcomePage } from './hangman-game-welcome.page';
import { MatButtonModule } from '@angular/material/button';
import { SelectDifficultyLevelComponentModule } from '../../../../../libs/games-library/src/lib/adapters/primary/components/select-difficulty-level/select-difficulty-level.component-module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    SelectDifficultyLevelComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HangmanGameWelcomePage,
      },
    ]),
  ],
  declarations: [HangmanGameWelcomePage],
  providers: [],
  exports: [],
})
export class HangmanGameWelcomePageModule {}
