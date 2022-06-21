import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerDTO } from './player.dto';

export const GETS_ALL_PLAYER_DTO = new InjectionToken<GetsAllPlayerDtoPort>(
  'GETS_ALL_PLAYER_DTO'
);

export interface GetsAllPlayerDtoPort {
  getAll(): Observable<PlayerDTO[]>;
}
