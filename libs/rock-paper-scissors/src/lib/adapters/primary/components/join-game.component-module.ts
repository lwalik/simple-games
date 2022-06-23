import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinGameComponent } from './join-game.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  declarations: [JoinGameComponent],
  providers: [],
  exports: [JoinGameComponent],
})
export class JoinGameComponentModule {}
