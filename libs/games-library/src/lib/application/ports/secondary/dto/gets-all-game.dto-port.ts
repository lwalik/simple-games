import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDTO } from './game.dto';

export const GETS_ALL_GAME_DTO = new InjectionToken<GetsAllGameDtoPort>(
  'GETS_ALL_GAME_DTO'
);

export interface GetsAllGameDtoPort {
  getAll(): Observable<GameDTO[]>;
}
