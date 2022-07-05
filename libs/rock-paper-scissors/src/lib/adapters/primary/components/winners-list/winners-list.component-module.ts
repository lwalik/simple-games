import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinnersListComponent } from './winners-list.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [CommonModule, MatChipsModule],
  declarations: [WinnersListComponent],
  providers: [],
  exports: [WinnersListComponent],
})
export class WinnersListComponentModule {}
