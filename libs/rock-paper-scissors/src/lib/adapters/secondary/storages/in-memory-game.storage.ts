import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SelectsGameContextPort } from '../../../application/ports/secondary/context/selects-game.context-port';
import { PatchesGameContextPort } from '../../../application/ports/secondary/context/patches-game.context-port';
import { GameContext } from '../../../application/ports/secondary/context/game.context';

@Injectable()
export class InMemoryGameStorage
  implements SelectsGameContextPort, PatchesGameContextPort
{
  private _subject: Subject<GameContext> = new ReplaySubject<GameContext>(1);

  select(): Observable<GameContext> {
    return this._subject.asObservable();
  }

  patch(state: Partial<GameContext>): Observable<void> {
    return this._subject.pipe(
      take(1),
      map((context) => this._subject.next({ ...context, ...state }))
    );
  }
}
