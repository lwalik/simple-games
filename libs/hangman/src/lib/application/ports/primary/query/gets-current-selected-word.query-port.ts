import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectedWordQuery } from './selected-word.query';

export const GETS_CURRENT_SELECTED_WORD_QUERY =
  new InjectionToken<GetsCurrentSelectedWordQueryPort>(
    'GETS_CURRENT_SELECTED_WORD_QUERY'
  );

export interface GetsCurrentSelectedWordQueryPort {
  getCurrentSelectedWordQuery(): Observable<SelectedWordQuery>;
}
