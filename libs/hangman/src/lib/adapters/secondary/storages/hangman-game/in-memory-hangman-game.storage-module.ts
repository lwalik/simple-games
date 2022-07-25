import { NgModule } from '@angular/core';
import { InMemoryHangmanGameStorage } from './in-memory-hangman-game.storage';
import { SETS_STATE_HANGMAN_GAME_CONTEXT } from '../../../../application/ports/secondary/context/sets-state-hangman-game.context-port';
import { SELECTS_HANGMAN_GAME_CONTEXT } from '../../../../application/ports/secondary/context/selects-hangman-game.context-port';
import { PATCHES_HANGMAN_GAME_CONTEXT } from '../../../../application/ports/secondary/context/patches-hangman-game.context-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryHangmanGameStorage, { provide: SETS_STATE_HANGMAN_GAME_CONTEXT, useExisting: InMemoryHangmanGameStorage }, { provide: SELECTS_HANGMAN_GAME_CONTEXT, useExisting: InMemoryHangmanGameStorage }, { provide: PATCHES_HANGMAN_GAME_CONTEXT, useExisting: InMemoryHangmanGameStorage }],
  	exports: [] })
export class InMemoryHangmanGameStorageModule {
}
