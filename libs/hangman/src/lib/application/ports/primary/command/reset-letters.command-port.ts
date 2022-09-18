import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ResetLettersCommand } from './reset-letters.command';

export const RESET_LETTERS_COMMAND =
  new InjectionToken<ResetLettersCommandPort>('RESET_LETTERS_COMMAND');

export interface ResetLettersCommandPort {
  resetLetter(command: ResetLettersCommand): Observable<void>;
}
