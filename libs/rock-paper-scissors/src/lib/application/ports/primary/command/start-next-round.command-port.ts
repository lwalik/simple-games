import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { StartNextRoundCommand } from './start-next-round.command';

export const START_NEXT_ROUND_COMMAND =
  new InjectionToken<StartNextRoundCommandPort>('START_NEXT_ROUND_COMMAND');

export interface StartNextRoundCommandPort {
  startNextRound(command: StartNextRoundCommand): Observable<void>;
}
