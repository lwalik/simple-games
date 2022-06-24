import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DisplayPlayersOnBoardQuery } from './display-players-on-board.query';

export const GETS_CURRENT_DISPLAY_PLAYERS_ON_BOARD_QUERY = new InjectionToken<GetsCurrentDisplayPlayersOnBoardQueryPort>('GETS_CURRENT_DISPLAY_PLAYERS_ON_BOARD_QUERY');

export interface GetsCurrentDisplayPlayersOnBoardQueryPort {
  getCurrentDisplayPlayersOnBoardQuery(): Observable<DisplayPlayersOnBoardQuery>;
}
