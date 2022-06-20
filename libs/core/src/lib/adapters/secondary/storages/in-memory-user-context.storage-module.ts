import { NgModule } from '@angular/core';
import { InMemoryUserContextStorage } from './in-memory-user-context.storage';
import { SETS_STATE_USER_CONTEXT } from '../../../application/ports/secondary/context/sets-state-user.context-port';
import { SELECTS_USER_CONTEXT } from '../../../application/ports/secondary/context/selects-user.context-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryUserContextStorage,
    {
      provide: SETS_STATE_USER_CONTEXT,
      useExisting: InMemoryUserContextStorage,
    },
    { provide: SELECTS_USER_CONTEXT, useExisting: InMemoryUserContextStorage },
  ],
  exports: [],
})
export class InMemoryUserContextStorageModule {}
