import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FirebaseGamesServiceModule,
  MultiGamesListComponentModule,
  SingleGamesListComponentModule,
} from '@games-library';
import { GamesLibraryPage } from './games-library.page';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GamesLibraryPage,
      },
    ]),
    MultiGamesListComponentModule,
    FirebaseGamesServiceModule,
    MatTabsModule,
    MatButtonModule,
    SingleGamesListComponentModule,
  ],
  declarations: [GamesLibraryPage],
  providers: [],
  exports: [],
})
export class GamesLibraryPageModule {}
