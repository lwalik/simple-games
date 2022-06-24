import { NgModule } from '@angular/core';
import { InMemoryGameStorage } from './in-memory-game.storage';
import { SELECTS_GAME_CONTEXT } from '../../../application/ports/secondary/context/selects-game.context-port';
import { PATCHES_GAME_CONTEXT } from '../../../application/ports/secondary/context/patches-game.context-port';
import { SETS_STATE_GAME_CONTEXT } from '../../../application/ports/secondary/context/sets-state-game.context-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryGameStorage, { provide: SELECTS_GAME_CONTEXT, useExisting: InMemoryGameStorage }, { provide: PATCHES_GAME_CONTEXT, useExisting: InMemoryGameStorage }, { provide: SETS_STATE_GAME_CONTEXT, useExisting: InMemoryGameStorage }],
  	exports: [] })
export class InMemoryGameStorageModule {
}
