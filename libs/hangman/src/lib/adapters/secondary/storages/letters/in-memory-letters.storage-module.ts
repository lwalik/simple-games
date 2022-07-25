import { NgModule } from '@angular/core';
import { InMemoryLettersStorage } from './in-memory-letters.storage';
import { SETS_STATE_LETTERS_CONTEXT } from '../../../../application/ports/secondary/context/letters/sets-state-letters.context-port';
import { SELECTS_LETTERS_CONTEXT } from '../../../../application/ports/secondary/context/letters/selects-letters.context-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryLettersStorage,
    {
      provide: SETS_STATE_LETTERS_CONTEXT,
      useExisting: InMemoryLettersStorage,
    },
    { provide: SELECTS_LETTERS_CONTEXT, useExisting: InMemoryLettersStorage },
  ],
  exports: [],
})
export class InMemoryLettersStorageModule {}
