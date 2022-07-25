import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FirebaseHangmanGameServiceModule,
  HangmanGameStateModule,
  InitLettersResolver,
  InitLettersResolverModule,
  InMemoryHangmanGameStorageModule,
  InMemoryLettersStorageModule,
  LettersComponentModule,
} from '@hangman';
import { HangmanGameBoardPage } from './hangman-game-board.page';

@NgModule({
  imports: [
    CommonModule,
    HangmanGameStateModule,
    FirebaseHangmanGameServiceModule,
    InMemoryHangmanGameStorageModule,
    InMemoryLettersStorageModule,
    InitLettersResolverModule,
    RouterModule.forChild([
      {
        path: '',
        component: HangmanGameBoardPage,
        resolve: [InitLettersResolver],
      },
    ]),
    LettersComponentModule,
  ],
  declarations: [HangmanGameBoardPage],
  providers: [],
  exports: [],
})
export class HangmanGameBoardPageModule {}
