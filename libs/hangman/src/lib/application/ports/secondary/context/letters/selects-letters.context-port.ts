import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { LettersContext } from './letters.context';

export const SELECTS_LETTERS_CONTEXT =
  new InjectionToken<SelectsLettersContextPort>('SELECTS_LETTERS_CONTEXT');

export interface SelectsLettersContextPort {
  select(): Observable<LettersContext>;
}
