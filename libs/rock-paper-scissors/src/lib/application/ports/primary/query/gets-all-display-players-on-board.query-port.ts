import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DisplayPlayersOnBoardQuery } from './display-players-on-board.query';

export const GETS_ALL_DISPLAY_PLAYERS_ON_BOARD_QUERY =
  new InjectionToken<GetsAllDisplayPlayersOnBoardQueryPort>(
    'GETS_ALL_DISPLAY_PLAYERS_ON_BOARD_QUERY'
  );

export interface GetsAllDisplayPlayersOnBoardQueryPort {
  getAllDisplayPlayersOnBoardQuery(): Observable<DisplayPlayersOnBoardQuery[]>;
}
