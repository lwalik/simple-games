import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectPlayerCountComponent } from './select-player-count.component';
import { MatSelectModule } from '@angular/material/select';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
  ],
  declarations: [SelectPlayerCountComponent],
  providers: [],
  exports: [SelectPlayerCountComponent],
})
export class SelectPlayerCountComponentModule {}
