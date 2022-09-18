import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TakeWordCommand } from './take-word.command';

export const TAKE_WORD_COMMAND = new InjectionToken<TakeWordCommandPort>(
  'TAKE_WORD_COMMAND'
);

export interface TakeWordCommandPort {
  takeWord(command: TakeWordCommand): Observable<void>;
}
