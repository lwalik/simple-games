import { NgModule } from '@angular/core';
import { HangmanGameState } from './hangman-game.state';
import { GETS_ALL_LETTERS_QUERY } from '../ports/primary/query/gets-all-letters.query-port';
import { INIT_LETTERS_COMMAND } from '../ports/primary/command/init-letters.command-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    HangmanGameState,
    { provide: GETS_ALL_LETTERS_QUERY, useExisting: HangmanGameState },
    { provide: INIT_LETTERS_COMMAND, useExisting: HangmanGameState },
  ],
  exports: [],
})
export class HangmanGameStateModule {}
