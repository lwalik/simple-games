import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HangmanGameStateModule, LettersComponentModule } from '@hangman';
import { HangmanGameBoardPage } from './hangman-game-board.page';

@NgModule({
  imports: [
    CommonModule,
    HangmanGameStateModule,
    RouterModule.forChild([
      {
        path: '',
        component: HangmanGameBoardPage,
      },
    ]),
    LettersComponentModule,
  ],
  declarations: [HangmanGameBoardPage],
  providers: [],
  exports: [],
})
export class HangmanGameBoardPageModule {}
