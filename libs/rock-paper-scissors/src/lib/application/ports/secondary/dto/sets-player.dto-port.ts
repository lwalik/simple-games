import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerDTO } from './player.dto';

export const SETS_PLAYER_DTO = new InjectionToken<SetsPlayerDtoPort>(
  'SETS_PLAYER_DTO'
);

export interface SetsPlayerDtoPort {
  set(player: Partial<PlayerDTO>): Observable<void>;
}
