import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GETS_ALL_LETTERS_QUERY,
  GetsAllLettersQueryPort,
} from '../../../../application/ports/primary/query/gets-all-letters.query-port';
import {
  SELECT_LETTER_COMMAND,
  SelectLetterCommandPort,
} from '../../../../application/ports/primary/command/select-letter.command-port';
import { SelectLetterCommand } from 'libs/hangman/src/lib/application/ports/primary/command/select-letter.command';
import { LetterQuery } from 'libs/hangman/src/lib/application/ports/primary/query/letter.query';

@Component({
  selector: 'lib-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LettersComponent {
  letters$: Observable<LetterQuery[]> =
    this._getsAllLettersQuery.getAllLettersQuery();

  constructor(
    @Inject(GETS_ALL_LETTERS_QUERY)
    private _getsAllLettersQuery: GetsAllLettersQueryPort,
    @Inject(SELECT_LETTER_COMMAND)
    private _selectLetterCommand: SelectLetterCommandPort
  ) {}

  onLetterClicked(input: string): void {
    this._selectLetterCommand
      .selectLetter(new SelectLetterCommand(input))
      .subscribe();
  }
}
