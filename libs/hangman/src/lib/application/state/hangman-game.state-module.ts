import { NgModule } from '@angular/core';
import { HangmanGameState } from './hangman-game.state';
import { GETS_ALL_LETTERS_QUERY } from '../ports/primary/query/gets-all-letters.query-port';
import { SELECT_LETTER_COMMAND } from '../ports/primary/command/select-letter.command-port';
import { INIT_HANGMAN_GAME_COMMAND } from '../ports/primary/command/init-hangman-game.command-port';
import { GETS_CURRENT_SELECTED_WORD_QUERY } from '../ports/primary/query/gets-current-selected-word.query-port';
import { TAKE_WORD_COMMAND } from '../ports/primary/command/take-word.command-port';
import { GETS_ALL_LIVES_QUERY } from '../ports/primary/query/gets-all-lives.query-port';
import { RESET_LETTERS_COMMAND } from '../ports/primary/command/reset-letters.command-port';
import { SELECT_DIFFICULTY_LEVEL_COMMAND_PORT } from '../ports/primary/command/select-difficulty-level.command-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    HangmanGameState,
    { provide: GETS_ALL_LETTERS_QUERY, useExisting: HangmanGameState },
    { provide: SELECT_LETTER_COMMAND, useExisting: HangmanGameState },
    { provide: INIT_HANGMAN_GAME_COMMAND, useExisting: HangmanGameState },
    {
      provide: GETS_CURRENT_SELECTED_WORD_QUERY,
      useExisting: HangmanGameState,
    },
    { provide: TAKE_WORD_COMMAND, useExisting: HangmanGameState },
    { provide: GETS_ALL_LIVES_QUERY, useExisting: HangmanGameState },
    { provide: RESET_LETTERS_COMMAND, useExisting: HangmanGameState },
    {
      provide: SELECT_DIFFICULTY_LEVEL_COMMAND_PORT,
      useExisting: HangmanGameState,
    },
  ],
  exports: [],
})
export class HangmanGameStateModule {}
