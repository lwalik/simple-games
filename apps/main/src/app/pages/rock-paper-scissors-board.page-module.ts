import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BoardComponentModule, FirebasePlayersServiceModule, JoinGameComponentModule } from '@rock-paper-scissors';
import { RockPaperScissorsBoardPage } from './rock-paper-scissors-board.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RockPaperScissorsBoardPage,
      },
    ]),
    JoinGameComponentModule,
    FirebasePlayersServiceModule,
    BoardComponentModule
  ],
  declarations: [RockPaperScissorsBoardPage],
  providers: [],
  exports: [],
})
export class RockPaperScissorsBoardPageModule {}
