import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerDTO } from './player.dto';

export const GETS_ONE_PLAYER_DTO = new InjectionToken<GetsOnePlayerDtoPort>(
  'GETS_ONE_PLAYER_DTO'
);

export interface GetsOnePlayerDtoPort {
  getOne(id: string): Observable<PlayerDTO>;
}
