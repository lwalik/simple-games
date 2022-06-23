import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  BoardComponentModule,
  FirebasePlayersServiceModule,
  FirebaseRpsBoardServiceModule,
  GameStateModule,
  InMemoryGameStorageModule,
  JoinGameComponentModule,
  SelectPlayerCountComponentModule,
} from '@rock-paper-scissors';
import { RockPaperScissorsBoardPage } from './rock-paper-scissors-board.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: RockPaperScissorsBoardPage,
      },
    ]),
    JoinGameComponentModule,
    FirebasePlayersServiceModule,
    BoardComponentModule,
    SelectPlayerCountComponentModule,
    FirebaseRpsBoardServiceModule,
    InMemoryGameStorageModule,
    GameStateModule,
  ],
  declarations: [RockPaperScissorsBoardPage],
  providers: [],
  exports: [],
})
export class RockPaperScissorsBoardPageModule {}
