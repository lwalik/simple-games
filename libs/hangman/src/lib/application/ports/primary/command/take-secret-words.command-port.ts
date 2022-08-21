import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TakeSecretWordsCommand } from './take-secret-words.command';

export const TAKE_SECRET_WORDS_COMMAND_PORT =
  new InjectionToken<TakeSecretWordsCommandPort>(
    'TAKE_SECRET_WORDS_COMMAND_PORT'
  );

export interface TakeSecretWordsCommandPort {
  takeSecretWords(command: TakeSecretWordsCommand): Observable<void>;
}
