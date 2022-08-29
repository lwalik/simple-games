import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import {
  INIT_HANGMAN_BOARD_COMMAND_PORT,
  InitHangmanBoardCommandPort,
} from '../../../../application/ports/primary/command/init-hangman-board.command-port';
import { InitHangmanGameCommand } from '../../../../application/ports/primary/command/init-hangman-game.command';
import { map } from 'rxjs/operators';

@Injectable()
export class InitHangmanBoardResolver implements Resolve<void> {
  constructor(
    @Inject(INIT_HANGMAN_BOARD_COMMAND_PORT)
    private _initHangmanBoardCommandPort: InitHangmanBoardCommandPort
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<void> {
    return this._initHangmanBoardCommandPort
      .initHangmanBoard(new InitHangmanGameCommand())
      .pipe(map(() => void 0));
  }
}
