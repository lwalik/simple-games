import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiGamesListComponent } from './multi-games-list.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatButtonModule, RouterModule],
  declarations: [MultiGamesListComponent],
  providers: [],
  exports: [MultiGamesListComponent],
})
export class MultiGamesListComponentModule {}
