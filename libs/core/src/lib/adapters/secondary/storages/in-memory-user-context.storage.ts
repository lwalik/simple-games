import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetsStateUserContextPort } from '../../../application/ports/secondary/context/sets-state-user.context-port';
import { SelectsUserContextPort } from '../../../application/ports/secondary/context/selects-user.context-port';
import { UserContext } from '../../../application/ports/secondary/context/user.context';

@Injectable()
export class InMemoryUserContextStorage
  implements SetsStateUserContextPort, SelectsUserContextPort
{
  private _subject: Subject<Partial<UserContext>> = new ReplaySubject<
    Partial<UserContext>
  >(1);

  setState(state: UserContext): Observable<void> {
    return of(this._subject.next(state)).pipe(map(() => void 0));
  }

  select(): Observable<Partial<UserContext>> {
    return this._subject.asObservable();
  }
}
