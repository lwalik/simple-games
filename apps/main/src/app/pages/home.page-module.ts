import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { NavComponentModule } from '@navigation';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    NavComponentModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
