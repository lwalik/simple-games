import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RpsBoardDTO } from './rps-board.dto';

export const GETS_ONE_RPS_BOARD_DTO =
  new InjectionToken<GetsOneRpsBoardDtoPort>('GETS_ONE_RPS_BOARD_DTO');

export interface GetsOneRpsBoardDtoPort {
  getOne(): Observable<RpsBoardDTO>;
}
