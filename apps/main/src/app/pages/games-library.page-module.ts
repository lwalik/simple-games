import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GamesLibraryPage } from './games-library.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: GamesLibraryPage,
        }
      ])],
  	declarations: [GamesLibraryPage],
  	providers: [],
  	exports: [] })
export class GamesLibraryPageModule {
}
