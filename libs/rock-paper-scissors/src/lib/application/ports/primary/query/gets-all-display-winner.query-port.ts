import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DisplayWinnerQuery } from './display-winner.query';

export const GETS_ALL_DISPLAY_WINNER_QUERY =
  new InjectionToken<GetsAllDisplayWinnerQueryPort>(
    'GETS_ALL_DISPLAY_WINNER_QUERY'
  );

export interface GetsAllDisplayWinnerQueryPort {
  getAllDisplayWinnerQuery(): Observable<DisplayWinnerQuery[]>;
}
