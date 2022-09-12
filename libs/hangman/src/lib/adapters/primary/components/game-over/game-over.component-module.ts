import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameOverComponent } from './game-over.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [GameOverComponent],
  providers: [],
  exports: [GameOverComponent],
})
export class GameOverComponentModule {}
