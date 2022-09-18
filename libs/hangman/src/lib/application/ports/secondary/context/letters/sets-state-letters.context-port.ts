import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const SETS_STATE_LETTERS_CONTEXT =
  new InjectionToken<SetsStateLettersContextPort>('SETS_STATE_LETTERS_CONTEXT');

export interface SetsStateLettersContextPort {
  setState(): Observable<void>;
}
