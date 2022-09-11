import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  IfGameOverDirectiveModule,
  LettersComponentModule,
  LivesCounterComponentModule,
  SecretWordComponentModule,
} from '@hangman';
import { HangmanGameBoardPage } from './hangman-game-board.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HangmanGameBoardPage,
      },
    ]),
    LettersComponentModule,
    SecretWordComponentModule,
    LivesCounterComponentModule,
    IfGameOverDirectiveModule,
  ],
  declarations: [HangmanGameBoardPage],
  providers: [],
  exports: [],
})
export class HangmanGameBoardPageModule {}
