import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivesCounterComponent } from './lives-counter.component';

@NgModule({ imports: [CommonModule],
  	declarations: [LivesCounterComponent],
  	providers: [],
  	exports: [LivesCounterComponent] })
export class LivesCounterComponentModule {
}
