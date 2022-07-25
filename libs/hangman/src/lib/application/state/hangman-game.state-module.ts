import { NgModule } from '@angular/core';
import { HangmanGameState } from './hangman-game.state';
import { GETS_ALL_LETTERS_QUERY } from '../ports/primary/query/gets-all-letters.query-port';
import { SELECT_LETTER_COMMAND } from '../ports/primary/command/select-letter.command-port';
import { INIT_HANGMAN_GAME_COMMAND } from '../ports/primary/command/init-hangman-game.command-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    HangmanGameState,
    { provide: GETS_ALL_LETTERS_QUERY, useExisting: HangmanGameState },
    { provide: SELECT_LETTER_COMMAND, useExisting: HangmanGameState },
    { provide: INIT_HANGMAN_GAME_COMMAND, useExisting: HangmanGameState },
  ],
  exports: [],
})
export class HangmanGameStateModule {}
