import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DisplayBoardQuery } from './display-board.query';

export const GETS_CURRENT_DISPLAY_BOARD_QUERY =
  new InjectionToken<GetsCurrentDisplayBoardQueryPort>(
    'GETS_CURRENT_DISPLAY_BOARD_QUERY'
  );

export interface GetsCurrentDisplayBoardQueryPort {
  getCurrentDisplayBoardQuery(): Observable<DisplayBoardQuery>;
}
