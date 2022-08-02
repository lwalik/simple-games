import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FirebaseHangmanGameServiceModule,
  HangmanGameStateModule,
  InMemoryHangmanGameStorageModule,
  InitHangmanGameResolver,
  InitHangmanGameResolverModule,
  LettersComponentModule,
  LivesCounterComponentModule,
  SecretWordComponentModule,
  InMemoryLettersStorageModule,
} from '@hangman';
import { HangmanGameBoardPage } from './hangman-game-board.page';

@NgModule({
  imports: [
    CommonModule,
    HangmanGameStateModule,
    FirebaseHangmanGameServiceModule,
    InMemoryHangmanGameStorageModule,
    InMemoryLettersStorageModule,
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
    LivesCounterComponentModule,
  ],
  declarations: [HangmanGameBoardPage],
  providers: [],
  exports: [],
})
export class HangmanGameBoardPageModule {}
