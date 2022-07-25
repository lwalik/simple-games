import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetsStateLettersContextPort } from '../../../../application/ports/secondary/context/letters/sets-state-letters.context-port';
import { SelectsLettersContextPort } from '../../../../application/ports/secondary/context/letters/selects-letters.context-port';
import { LettersContext } from '../../../../application/ports/secondary/context/letters/letters.context';

@Injectable()
export class InMemoryLettersStorage implements SetsStateLettersContextPort, SelectsLettersContextPort {
  private _subject: Subject<LettersContext> = new ReplaySubject<LettersContext>(
    1
  );

  setState(state: LettersContext): Observable<void> {
    return of(this._subject.next(state)).pipe(map(() => void 0));
  }

  select(): Observable<LettersContext> {
    return this._subject.asObservable();
  }
}
