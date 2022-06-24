import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TakePlayerCommand } from './take-player.command';

export const TAKE_PLAYER_COMMAND = new InjectionToken<TakePlayerCommandPort>(
  'TAKE_PLAYER_COMMAND'
);

export interface TakePlayerCommandPort {
  takePlayer(command: TakePlayerCommand): Observable<void>;
}
