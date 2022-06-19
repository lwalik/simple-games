import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors-board-page',
  templateUrl: './rock-paper-scissors-board.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RockPaperScissorsBoardPage {}
