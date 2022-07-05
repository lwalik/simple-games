import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DisplayPlayerOnBoardQuery } from './display-player-on-board.query';

export const GETS_ALL_DISPLAY_PLAYER_ON_BOARD_QUERY =
  new InjectionToken<GetsAllDisplayPlayerOnBoardQueryPort>(
    'GETS_ALL_DISPLAY_PLAYER_RESULT_QUERY'
  );

export interface GetsAllDisplayPlayerOnBoardQueryPort {
  getAllDisplayPlayerOnBoardQuery(): Observable<DisplayPlayerOnBoardQuery[]>;
}
