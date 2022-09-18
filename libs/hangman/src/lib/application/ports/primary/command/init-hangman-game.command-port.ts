import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { InitHangmanGameCommand } from './init-hangman-game.command';

export const INIT_HANGMAN_GAME_COMMAND =
  new InjectionToken<InitHangmanGameCommandPort>('INIT_HANGMAN_GAME_COMMAND');

export interface InitHangmanGameCommandPort {
  initHangmanGame(command: InitHangmanGameCommand): Observable<void>;
}
