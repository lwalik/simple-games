import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-select-difficulty-level',
  templateUrl: './select-difficulty-level.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectDifficultyLevelComponent {
  readonly difficultyLevels: string[] = ['Low', 'Medium'];

  readonly difficultyForm: FormGroup = new FormGroup({
    selectedLevel: new FormControl('', Validators.required),
  });

  onSelectedLevelChange(form: FormGroup): void {
    console.log(form.get('selectedLevel')?.value);
  }
}
