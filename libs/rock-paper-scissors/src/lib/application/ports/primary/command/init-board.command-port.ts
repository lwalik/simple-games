import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { InitBoardCommand } from './init-board.command';

export const INIT_BOARD_COMMAND = new InjectionToken<InitBoardCommandPort>(
  'INIT_BOARD_COMMAND'
);

export interface InitBoardCommandPort {
  initBoard(command: InitBoardCommand): Observable<void>;
}
