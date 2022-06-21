import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinGameComponent } from './join-game.component';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatChipsModule],
  declarations: [JoinGameComponent],
  providers: [],
  exports: [JoinGameComponent],
})
export class JoinGameComponentModule {}
