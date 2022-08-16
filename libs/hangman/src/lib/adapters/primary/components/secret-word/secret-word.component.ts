import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { HangmanGameContext } from '../../../../application/ports/secondary/context/hangman-game/hangman-game.context';
import {
  SELECTS_HANGMAN_GAME_CONTEXT,
  SelectsHangmanGameContextPort,
} from '../../../../application/ports/secondary/context/hangman-game/selects-hangman-game.context-port';
import {
  TAKE_WORD_COMMAND,
  TakeWordCommandPort,
} from '../../../../application/ports/primary/command/take-word.command-port';
import {
  GETS_CURRENT_SELECTED_WORD_QUERY,
  GetsCurrentSelectedWordQueryPort,
} from '../../../../application/ports/primary/query/gets-current-selected-word.query-port';
import { TakeWordCommand } from '../../../../application/ports/primary/command/take-word.command';

@Component({
  selector: 'lib-secret-word',
  templateUrl: './secret-word.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecretWordComponent {
  word$: Observable<string[]> = combineLatest([
    this._getsCurrentSelectedWordQuery.getCurrentSelectedWordQuery(),
    this._selectsHangmanGameContext.select(),
  ]).pipe(
    map(([secretWord, context]) =>
      [...secretWord.word].map((letter) =>
        context.selectedLetters.includes(letter) ? letter : ''
      )
    )
  );

  allWords$: Observable<HangmanGameContext> = this._selectsHangmanGameContext
    .select()
    .pipe(map((context) => context));

  constructor(
    @Inject(SELECTS_HANGMAN_GAME_CONTEXT)
    private _selectsHangmanGameContext: SelectsHangmanGameContextPort,
    @Inject(TAKE_WORD_COMMAND) private _takeWordCommand: TakeWordCommandPort,
    @Inject(GETS_CURRENT_SELECTED_WORD_QUERY)
    private _getsCurrentSelectedWordQuery: GetsCurrentSelectedWordQueryPort
  ) {}

  onStartBtnClicked(): void {
    this._takeWordCommand.takeWord(new TakeWordCommand()).subscribe();
  }
}
