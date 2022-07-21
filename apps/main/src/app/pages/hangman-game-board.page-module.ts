import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HangmanGameBoardPage } from './hangman-game-board.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HangmanGameBoardPage,
        }
      ])],
  	declarations: [HangmanGameBoardPage],
  	providers: [],
  	exports: [] })
export class HangmanGameBoardPageModule {
}
