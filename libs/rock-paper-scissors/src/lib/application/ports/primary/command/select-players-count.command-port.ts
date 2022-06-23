import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectPlayersCountCommand } from './select-players-count.command';

export const SELECT_PLAYERS_COUNT_COMMAND =
  new InjectionToken<SelectPlayersCountCommandPort>(
    'SELECT_PLAYERS_COUNT_COMMAND'
  );

export interface SelectPlayersCountCommandPort {
  selectPlayersCount(command: SelectPlayersCountCommand): Observable<void>;
}
