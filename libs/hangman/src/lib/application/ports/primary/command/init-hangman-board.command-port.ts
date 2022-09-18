import { InjectionToken } from '@angular/core';
import { InitHangmanGameCommand } from './init-hangman-game.command';
import { Observable } from 'rxjs';

export const INIT_HANGMAN_BOARD_COMMAND_PORT =
  new InjectionToken<InitHangmanBoardCommandPort>(
    'INIT_HANGMAN_BOARD_COMMAND_PORT'
  );

export interface InitHangmanBoardCommandPort {
  initHangmanBoard(command: InitHangmanGameCommand): Observable<void>;
}
