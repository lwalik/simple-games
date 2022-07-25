import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LettersQuery } from '../../../../application/ports/primary/query/letters.query';
import {
  GETS_ALL_LETTERS_QUERY,
  GetsAllLettersQueryPort,
} from '../../../../application/ports/primary/query/gets-all-letters.query-port';

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
    private _getsAllLettersQuery: GetsAllLettersQueryPort
  ) {}

  onLetterClicked(input: string): void {
    this.letters$ = this.letters$.pipe(
      map((letters) =>
        letters.map((letter) =>
          letter.letter === input ? { letter: input, isDisabled: true } : letter
        )
      )
    );
  }
}
