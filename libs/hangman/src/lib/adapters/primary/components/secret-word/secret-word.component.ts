import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  TAKE_WORD_COMMAND,
  TakeWordCommandPort,
} from '../../../../application/ports/primary/command/take-word.command-port';
import {
  GETS_CURRENT_SELECTED_WORD_QUERY,
  GetsCurrentSelectedWordQueryPort,
} from '../../../../application/ports/primary/query/gets-current-selected-word.query-port';
import {
  RESET_LETTERS_COMMAND,
  ResetLettersCommandPort,
} from '../../../../application/ports/primary/command/reset-letters.command-port';
import { TakeWordCommand } from '../../../../application/ports/primary/command/take-word.command';
import { ResetLettersCommand } from '../../../../application/ports/primary/command/reset-letters.command';
import { SelectedWordQuery } from '../../../../application/ports/primary/query/selected-word.query';

@Component({
  selector: 'lib-secret-word',
  templateUrl: './secret-word.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecretWordComponent {
  word$: Observable<SelectedWordQuery> =
    this._getsCurrentSelectedWordQuery.getCurrentSelectedWordQuery();

  constructor(
    @Inject(TAKE_WORD_COMMAND) private _takeWordCommand: TakeWordCommandPort,
    @Inject(GETS_CURRENT_SELECTED_WORD_QUERY)
    private _getsCurrentSelectedWordQuery: GetsCurrentSelectedWordQueryPort,
    @Inject(RESET_LETTERS_COMMAND)
    private _resetLettersCommandPort: ResetLettersCommandPort
  ) {}

  onStartBtnClicked(): void {
    this._takeWordCommand
      .takeWord(new TakeWordCommand())
      .subscribe(() =>
        this._resetLettersCommandPort
          .resetLetter(new ResetLettersCommand())
          .subscribe()
      );
  }
}
