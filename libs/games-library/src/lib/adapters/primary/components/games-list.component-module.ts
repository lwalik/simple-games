import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './games-list.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatButtonModule, RouterModule],
  declarations: [GamesListComponent],
  providers: [],
  exports: [GamesListComponent],
})
export class GamesListComponentModule {}
