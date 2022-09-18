import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SelectsLettersContextPort } from '../../../../application/ports/secondary/context/letters/selects-letters.context-port';
import { SetsStateLettersContextPort } from '../../../../application/ports/secondary/context/letters/sets-state-letters.context-port';
import { LettersContext } from '../../../../application/ports/secondary/context/letters/letters.context';
import { PatchesLettersContextPort } from '../../../../application/ports/secondary/context/letters/patches-letters.context-port';

const LETTERS = {
  letters: [
    { letter: 'A', isDisabled: false },
    { letter: 'Ą', isDisabled: false },
    { letter: 'B', isDisabled: false },
    { letter: 'C', isDisabled: false },
    { letter: 'Ć', isDisabled: false },
    { letter: 'D', isDisabled: false },
    { letter: 'E', isDisabled: false },
    { letter: 'Ę', isDisabled: false },
    { letter: 'F', isDisabled: false },
    { letter: 'G', isDisabled: false },
    { letter: 'H', isDisabled: false },
    { letter: 'I', isDisabled: false },
    { letter: 'J', isDisabled: false },
    { letter: 'K', isDisabled: false },
    { letter: 'L', isDisabled: false },
    { letter: 'Ł', isDisabled: false },
    { letter: 'M', isDisabled: false },
    { letter: 'N', isDisabled: false },
    { letter: 'Ń', isDisabled: false },
    { letter: 'O', isDisabled: false },
    { letter: 'Ó', isDisabled: false },
    { letter: 'P', isDisabled: false },
    { letter: 'Q', isDisabled: false },
    { letter: 'R', isDisabled: false },
    { letter: 'S', isDisabled: false },
    { letter: 'Ś', isDisabled: false },
    { letter: 'T', isDisabled: false },
    { letter: 'U', isDisabled: false },
    { letter: 'V', isDisabled: false },
    { letter: 'W', isDisabled: false },
    { letter: 'Y', isDisabled: false },
    { letter: 'Z', isDisabled: false },
    { letter: 'Ż', isDisabled: false },
    { letter: 'Ź', isDisabled: false },
  ],
};

@Injectable()
export class InMemoryLettersStorage
  implements
    SelectsLettersContextPort,
    SetsStateLettersContextPort,
    PatchesLettersContextPort
{
  private _subject: Subject<LettersContext> = new ReplaySubject<LettersContext>(
    1
  );

  select(): Observable<LettersContext> {
    return this._subject.asObservable();
  }

  setState(): Observable<void> {
    return of(this._subject.next(LETTERS)).pipe(map(() => void 0));
  }

  patch(state: Partial<LettersContext>): Observable<void> {
    return this._subject.pipe(
      take(1),
      map((context) => this._subject.next({ ...context, ...state }))
    );
  }
}
