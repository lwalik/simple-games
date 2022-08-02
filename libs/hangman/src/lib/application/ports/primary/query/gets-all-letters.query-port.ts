import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { LetterQuery } from './letter.query';

export const GETS_ALL_LETTERS_QUERY =
  new InjectionToken<GetsAllLettersQueryPort>('GETS_ALL_LETTERS_QUERY');

export interface GetsAllLettersQueryPort {
  getAllLettersQuery(): Observable<LetterQuery[]>;
}
