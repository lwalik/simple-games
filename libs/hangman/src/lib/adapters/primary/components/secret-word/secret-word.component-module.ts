import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecretWordComponent } from './secret-word.component';

@NgModule({ imports: [CommonModule],
  	declarations: [SecretWordComponent],
  	providers: [],
  	exports: [SecretWordComponent] })
export class SecretWordComponentModule {
}
