import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import {
  SelectsHangmanGameContextPort,
  SELECTS_HANGMAN_GAME_CONTEXT,
} from 'libs/hangman/src/lib/application/ports/secondary/context/hangman-game/selects-hangman-game.context-port';
import { combineLatest, map, Observable, of } from 'rxjs';

@Component({
  selector: 'lib-secret-word',
  templateUrl: './secret-word.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecretWordComponent {
  word$: Observable<string[]> = combineLatest([
    of('BIBLIOTEKA'.split('')),
    this._selectsHangmanGameContext.select(),
  ]).pipe(
    map(([word, context]) =>
      word.map((letter) =>
        context.selectedLetters.includes(letter) ? letter : ''
      )
    )
  );

  constructor(
    @Inject(SELECTS_HANGMAN_GAME_CONTEXT)
    private _selectsHangmanGameContext: SelectsHangmanGameContextPort
  ) {}
}
