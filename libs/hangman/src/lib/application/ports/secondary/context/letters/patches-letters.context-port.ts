import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { LettersContext } from './letters.context';

export const PATCHES_LETTERS_CONTEXT =
  new InjectionToken<PatchesLettersContextPort>('PATCHES_LETTERS_CONTEXT');

export interface PatchesLettersContextPort {
  patch(state: Partial<LettersContext>): Observable<void>;
}
