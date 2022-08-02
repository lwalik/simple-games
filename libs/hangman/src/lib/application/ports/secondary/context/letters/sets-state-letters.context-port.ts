import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { LettersContext } from './letters.context';

export const SETS_STATE_LETTERS_CONTEXT =
  new InjectionToken<SetsStateLettersContextPort>('SETS_STATE_LETTERS_CONTEXT');

export interface SetsStateLettersContextPort {
  setState(state: LettersContext): Observable<void>;
}
