import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecretWordComponent } from './secret-word.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [SecretWordComponent],
  providers: [],
  exports: [SecretWordComponent],
})
export class SecretWordComponentModule {}
