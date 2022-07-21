import { NgModule } from '@angular/core';
import { GETS_ALL_LETTERS_QUERY } from '../ports/primary/query/gets-all-letters.query-port';
import { HangmanGameState } from './hangman-game.state';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    HangmanGameState,
    { provide: GETS_ALL_LETTERS_QUERY, useExisting: HangmanGameState },
  ],
  exports: [],
})
export class HangmanGameStateModule {}
