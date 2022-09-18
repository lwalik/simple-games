import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { InitHangmanGameCommand } from 'libs/hangman/src/lib/application/ports/primary/command/init-hangman-game.command';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  INIT_HANGMAN_GAME_COMMAND,
  InitHangmanGameCommandPort,
} from '../../../../application/ports/primary/command/init-hangman-game.command-port';

@Injectable()
export class InitHangmanGameResolver implements Resolve<boolean> {
  constructor(
    @Inject(INIT_HANGMAN_GAME_COMMAND)
    private _initHangmanGameCommand: InitHangmanGameCommandPort
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._initHangmanGameCommand
      .initHangmanGame(new InitHangmanGameCommand())
      .pipe(map((_) => true));
  }
}
