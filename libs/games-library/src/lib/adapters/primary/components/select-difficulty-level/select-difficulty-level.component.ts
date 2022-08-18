import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lib-select-difficulty-level',
  templateUrl: './select-difficulty-level.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectDifficultyLevelComponent {
  readonly difficultyLevels: string[] = ['Low', 'Medium'];
}
