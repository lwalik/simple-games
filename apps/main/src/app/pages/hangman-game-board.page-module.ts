import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FirebaseHangmanGameServiceModule,
  HangmanGameStateModule,
  InitHangmanGameResolver,
  InitHangmanGameResolverModule,
  InMemoryHangmanGameStorageModule,
  LettersComponentModule,
  SecretWordComponentModule,
} from '@hangman';
import { HangmanGameBoardPage } from './hangman-game-board.page';

@NgModule({
  imports: [
    CommonModule,
    HangmanGameStateModule,
    FirebaseHangmanGameServiceModule,
    InMemoryHangmanGameStorageModule,
    InitHangmanGameResolverModule,
    RouterModule.forChild([
      {
        path: '',
        component: HangmanGameBoardPage,
        resolve: [InitHangmanGameResolver],
      },
    ]),
    LettersComponentModule,
    SecretWordComponentModule,
  ],
  declarations: [HangmanGameBoardPage],
  providers: [],
  exports: [],
})
export class HangmanGameBoardPageModule {}
