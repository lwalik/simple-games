import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SetsStateUserContextPort } from '../../../application/ports/secondary/context/sets-state-user.context-port';
import { SelectsUserContextPort } from '../../../application/ports/secondary/context/selects-user.context-port';
import { PatchesUserContextPort } from '../../../application/ports/secondary/context/patches-user.context-port';
import { UserContext } from '../../../application/ports/secondary/context/user.context';

@Injectable()
export class InMemoryUserContextStorage
  implements
    SetsStateUserContextPort,
    SelectsUserContextPort,
    PatchesUserContextPort
{
  private _subject: Subject<UserContext> = new ReplaySubject<UserContext>(1);

  setState(state: UserContext): Observable<void> {
    return of(this._subject.next(state)).pipe(map(() => void 0));
  }

  select(): Observable<UserContext> {
    return this._subject.asObservable();
  }

  patch(state: Partial<UserContext>): Observable<void> {
    return this._subject.pipe(
      take(1),
      map((context) => this._subject.next({ ...context, ...state }))
    );
  }
}
