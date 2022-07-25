import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { InitLettersCommand } from 'libs/hangman/src/lib/application/ports/primary/command/init-letters.command';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  INIT_LETTERS_COMMAND,
  InitLettersCommandPort,
} from '../../../../application/ports/primary/command/init-letters.command-port';

@Injectable()
export class InitLettersResolver implements Resolve<boolean> {
  constructor(
    @Inject(INIT_LETTERS_COMMAND)
    private _initLettersCommand: InitLettersCommandPort
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._initLettersCommand
      .initLetters(new InitLettersCommand())
      .pipe(map((_) => true));
  }
}
