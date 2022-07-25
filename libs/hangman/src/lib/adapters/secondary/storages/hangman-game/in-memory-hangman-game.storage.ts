import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SetsStateHangmanGameContextPort } from '../../../../application/ports/secondary/context/sets-state-hangman-game.context-port';
import { SelectsHangmanGameContextPort } from '../../../../application/ports/secondary/context/selects-hangman-game.context-port';
import { PatchesHangmanGameContextPort } from '../../../../application/ports/secondary/context/patches-hangman-game.context-port';
import { HangmanGameContext } from '../../../../application/ports/secondary/context/hangman-game.context';

@Injectable()
export class InMemoryHangmanGameStorage
  implements
    SetsStateHangmanGameContextPort,
    SelectsHangmanGameContextPort,
    PatchesHangmanGameContextPort
{
  private _subject: Subject<HangmanGameContext> =
    new ReplaySubject<HangmanGameContext>(1);

  setState(state: HangmanGameContext): Observable<void> {
    return of(this._subject.next(state)).pipe(map(() => void 0));
  }

  select(): Observable<HangmanGameContext> {
    return this._subject.asObservable();
  }

  patch(state: Partial<HangmanGameContext>): Observable<void> {
    return this._subject.pipe(
      take(1),
      map((context) => this._subject.next({ ...context, ...state }))
    );
  }
}
