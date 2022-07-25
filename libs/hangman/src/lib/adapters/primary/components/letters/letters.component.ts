import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LettersQuery } from '../../../../application/ports/primary/query/letters.query';
import {
  GETS_ALL_LETTERS_QUERY,
  GetsAllLettersQueryPort,
} from '../../../../application/ports/primary/query/gets-all-letters.query-port';
import {
  SELECT_LETTER_COMMAND,
  SelectLetterCommandPort,
} from '../../../../application/ports/primary/command/select-letter.command-port';
import { SelectLetterCommand } from 'libs/hangman/src/lib/application/ports/primary/command/select-letter.command';

@Component({
  selector: 'lib-letters',
  templateUrl: './letters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./letters.component.scss'],
})
export class LettersComponent {
  letters$: Observable<LettersQuery[]> =
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
      .subscribe(
        () =>
          (this.letters$ = this.letters$.pipe(
            map((letters) =>
              letters.map((letter) =>
                letter.letter === input
                  ? { letter: input, isDisabled: true }
                  : letter
              )
            )
          ))
      );
  }
}
