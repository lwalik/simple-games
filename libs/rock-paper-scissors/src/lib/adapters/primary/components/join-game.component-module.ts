import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinGameComponent } from './join-game.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [JoinGameComponent],
  providers: [],
  exports: [JoinGameComponent],
})
export class JoinGameComponentModule {}
