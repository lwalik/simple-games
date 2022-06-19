import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RockPaperScissorsBoardPage } from './rock-paper-scissors-board.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: RockPaperScissorsBoardPage,
        }
      ])],
  	declarations: [RockPaperScissorsBoardPage],
  	providers: [],
  	exports: [] })
export class RockPaperScissorsBoardPageModule {
}
