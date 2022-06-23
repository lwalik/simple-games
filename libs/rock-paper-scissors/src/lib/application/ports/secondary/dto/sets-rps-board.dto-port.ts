import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RpsBoardDTO } from './rps-board.dto';

export const SETS_RPS_BOARD_DTO = new InjectionToken<SetsRpsBoardDtoPort>(
  'SETS_RPS_BOARD_DTO'
);

export interface SetsRpsBoardDtoPort {
  set(rpsBoard: Partial<RpsBoardDTO>): Observable<void>;
}
