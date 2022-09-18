import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  SELECT_DIFFICULTY_LEVEL_COMMAND_PORT,
  SelectDifficultyLevelCommandPort,
} from '../../../../application/ports/primary/command/select-difficulty-level.command-port';
import {
  TAKE_SECRET_WORDS_COMMAND_PORT,
  TakeSecretWordsCommandPort,
} from '../../../../application/ports/primary/command/take-secret-words.command-port';
import { SelectDifficultyLevelCommand } from '../../../../application/ports/primary/command/select-difficulty-level.command';
import { Router } from '@angular/router';
import { TakeSecretWordsCommand } from '../../../../application/ports/primary/command/take-secret-words.command';

@Component({
  selector: 'lib-select-difficulty-level',
  templateUrl: './select-difficulty-level.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectDifficultyLevelComponent {
  readonly difficultyLevels: string[] = ['Low', 'Mid'];

  readonly difficultyForm: FormGroup = new FormGroup({
    selectedLevel: new FormControl('', Validators.required),
  });
  constructor(
    @Inject(SELECT_DIFFICULTY_LEVEL_COMMAND_PORT)
    private _selectDifficultyLevelCommandPort: SelectDifficultyLevelCommandPort,
    private _router: Router,
    @Inject(TAKE_SECRET_WORDS_COMMAND_PORT)
    private _takeSecretWordsCommandPort: TakeSecretWordsCommandPort
  ) {}

  onStartBtnClicked(form: FormGroup): void {
    this._selectDifficultyLevelCommandPort
      .selectDifficultyLevel(
        new SelectDifficultyLevelCommand(form.get('selectedLevel')?.value)
      )
      .subscribe(() =>
        this._takeSecretWordsCommandPort
          .takeSecretWords(new TakeSecretWordsCommand())
          .subscribe(() =>
            this._router.navigateByUrl(
              this._router.url.replace(/\/start/, '/board')
            )
          )
      );
  }
}
