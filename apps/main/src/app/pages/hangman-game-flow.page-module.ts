import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HangmanGameWelcomePageModule } from './hangman-game-welcome.page-module';
import { HangmanGameBoardPageModule } from './hangman-game-board.page-module';
import { HangmanGameFlowPage } from './hangman-game-flow.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'start',
        pathMatch: 'full',
      },
      {
        path: 'start',
        loadChildren: () => HangmanGameWelcomePageModule,
      },
      {
        path: 'board',
        loadChildren: () => HangmanGameBoardPageModule,
      },
    ]),
  ],
  declarations: [HangmanGameFlowPage],
  providers: [],
  exports: [],
})
export class HangmanGameFlowPageModule {}
