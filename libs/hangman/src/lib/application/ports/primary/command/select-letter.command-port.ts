import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectLetterCommand } from './select-letter.command';

export const SELECT_LETTER_COMMAND =
  new InjectionToken<SelectLetterCommandPort>('SELECT_LETTER_COMMAND');

export interface SelectLetterCommandPort {
  selectLetter(command: SelectLetterCommand): Observable<void>;
}
