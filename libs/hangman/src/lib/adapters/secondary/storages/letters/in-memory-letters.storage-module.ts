import { NgModule } from '@angular/core';
import { InMemoryLettersStorage } from './in-memory-letters.storage';
import { SELECTS_LETTERS_CONTEXT } from '../../../../application/ports/secondary/context/letters/selects-letters.context-port';
import { SETS_STATE_LETTERS_CONTEXT } from '../../../../application/ports/secondary/context/letters/sets-state-letters.context-port';
import { PATCHES_LETTERS_CONTEXT } from '../../../../application/ports/secondary/context/letters/patches-letters.context-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryLettersStorage,
    { provide: SELECTS_LETTERS_CONTEXT, useExisting: InMemoryLettersStorage },
    {
      provide: SETS_STATE_LETTERS_CONTEXT,
      useExisting: InMemoryLettersStorage,
    },
    {
      provide: PATCHES_LETTERS_CONTEXT,
      useExisting: InMemoryLettersStorage,
    },
  ],
  exports: [],
})
export class InMemoryLettersStorageModule {}
