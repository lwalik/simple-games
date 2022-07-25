import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FirebaseHangmanGameServiceModule,
  HangmanGameStateModule,
  InMemoryHangmanGameStorageModule,
  LettersComponentModule,
} from '@hangman';
import { HangmanGameBoardPage } from './hangman-game-board.page';

@NgModule({
  imports: [
    CommonModule,
    HangmanGameStateModule,
    FirebaseHangmanGameServiceModule,
    InMemoryHangmanGameStorageModule,
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
