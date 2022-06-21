import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FirebaseGamesServiceModule,
  GamesListComponentModule,
} from '@games-library';
import { GamesLibraryPage } from './games-library.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GamesLibraryPage,
      },
    ]),
    GamesListComponentModule,
    FirebaseGamesServiceModule,
  ],
  declarations: [GamesLibraryPage],
  providers: [],
  exports: [],
})
export class GamesLibraryPageModule {}
