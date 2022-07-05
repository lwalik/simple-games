import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { WantNextRoundCommand } from './want-next-round.command';

export const WANT_NEXT_ROUND_COMMAND =
  new InjectionToken<WantNextRoundCommandPort>('NEXT_ROUND_COMMAND');

export interface WantNextRoundCommandPort {
  wantNextRound(command: WantNextRoundCommand): Observable<void>;
}
