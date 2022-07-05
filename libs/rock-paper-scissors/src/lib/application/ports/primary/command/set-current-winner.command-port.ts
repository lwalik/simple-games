import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SetCurrentWinnerCommand } from './set-current-winner.command';

export const SET_CURRENT_WINNER_COMMAND =
  new InjectionToken<SetCurrentWinnerCommandPort>('SET_CURRENT_WINNER_COMMAND');

export interface SetCurrentWinnerCommandPort {
  setCurrentWinner(command: SetCurrentWinnerCommand): Observable<void>;
}
