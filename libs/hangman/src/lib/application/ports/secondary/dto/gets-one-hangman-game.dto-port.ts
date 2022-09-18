import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { HangmanGameDTO } from './hangman-game.dto';

export const GETS_ONE_HANGMAN_GAME_DTO =
  new InjectionToken<GetsOneHangmanGameDtoPort>('GETS_ONE_HANGMAN_GAME_DTO');

export interface GetsOneHangmanGameDtoPort {
  getOne(): Observable<HangmanGameDTO>;
}
