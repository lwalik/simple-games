import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueuePlayersComponent } from './queue-players.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  declarations: [QueuePlayersComponent],
  providers: [],
  exports: [QueuePlayersComponent],
})
export class QueuePlayersComponentModule {}
