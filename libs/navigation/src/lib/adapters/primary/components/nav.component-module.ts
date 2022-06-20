import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule],
  declarations: [NavComponent],
  providers: [],
  exports: [NavComponent],
})
export class NavComponentModule {}
