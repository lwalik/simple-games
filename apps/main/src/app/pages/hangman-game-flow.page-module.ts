import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HangmanGameWelcomePageModule } from './hangman-game-welcome.page-module';
import { HangmanGameBoardPageModule } from './hangman-game-board.page-module';
import { HangmanGameFlowPage } from './hangman-game-flow.page';
import {
  FirebaseHangmanGameServiceModule,
  HangmanGameStateModule,
  InitHangmanGameResolver,
  InitHangmanGameResolverModule,
  InMemoryHangmanGameStorageModule,
  InMemoryLettersStorageModule,
} from '@hangman';

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
        resolve: [InitHangmanGameResolver],
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: '/start',
          },
          {
            path: 'start',
            loadChildren: () => HangmanGameWelcomePageModule,
          },
          {
            path: 'board',
            loadChildren: () => HangmanGameBoardPageModule,
          },
        ],
      },
    ]),
  ],
  declarations: [HangmanGameFlowPage],
  providers: [],
  exports: [],
})
export class HangmanGameFlowPageModule {}
