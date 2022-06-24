import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPlayersInGameComponent } from './reset-players-in-game.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [ResetPlayersInGameComponent],
  providers: [],
  exports: [ResetPlayersInGameComponent],
})
export class ResetPlayersInGameComponentModule {}
