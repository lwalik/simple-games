import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LettersComponent } from './letters.component';

@NgModule({ imports: [CommonModule],
  	declarations: [LettersComponent],
  	providers: [],
  	exports: [LettersComponent] })
export class LettersComponentModule {
}
