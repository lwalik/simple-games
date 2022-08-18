import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HangmanGameWelcomePage } from './hangman-game-welcome.page';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
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
