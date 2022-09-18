import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GamesFlowPage } from './games-flow.page';
import { RockPaperScissorsBoardPageModule } from './rock-paper-scissors-board.page-module';
import { GamesLibraryPageModule } from './games-library.page-module';
import { HangmanGameFlowPageModule } from './hangman-game-flow.page-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GamesFlowPage,
        children: [
          {
            path: '',
            loadChildren: () => GamesLibraryPageModule,
          },
          {
            path: 'rock-paper-scissors',
            loadChildren: () => RockPaperScissorsBoardPageModule,
          },
          {
            path: 'hangman-game',
            loadChildren: () => HangmanGameFlowPageModule,
          },
        ],
      },
    ]),
  ],
  declarations: [GamesFlowPage],
  providers: [],
  exports: [],
})
export class GamesFlowPageModule {}
