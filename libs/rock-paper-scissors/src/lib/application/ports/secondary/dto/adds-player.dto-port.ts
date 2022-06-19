import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerDTO } from './player.dto';

export const ADDS_PLAYER_DTO = new InjectionToken<AddsPlayerDtoPort>(
  'ADDS_PLAYER_DTO'
);

export interface AddsPlayerDtoPort {
  add(player: Partial<PlayerDTO>): Observable<void>;
}
