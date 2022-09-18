import { NgModule } from '@angular/core';
import { IfGameOverDirective } from './if-game-over.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [IfGameOverDirective],
  providers: [],
  exports: [IfGameOverDirective],
})
export class IfGameOverDirectiveModule {}
