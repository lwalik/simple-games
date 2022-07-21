import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleGamesListComponent } from './single-games-list.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule],
  declarations: [SingleGamesListComponent],
  providers: [],
  exports: [SingleGamesListComponent],
})
export class SingleGamesListComponentModule {}
