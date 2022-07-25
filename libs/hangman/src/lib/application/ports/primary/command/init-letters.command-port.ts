import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { InitLettersCommand } from './init-letters.command';

export const INIT_LETTERS_COMMAND = new InjectionToken<InitLettersCommandPort>(
  'INIT_LETTERS_COMMAND'
);

export interface InitLettersCommandPort {
  initLetters(command: InitLettersCommand): Observable<void>;
}
