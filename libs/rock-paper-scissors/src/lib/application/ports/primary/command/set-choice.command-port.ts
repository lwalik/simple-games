import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SetChoiceCommand } from './set-choice.command';

export const SET_CHOICE_COMMAND = new InjectionToken<SetChoiceCommandPort>(
  'SET_CHOICE_COMMAND'
);

export interface SetChoiceCommandPort {
  setChoice(command: SetChoiceCommand): Observable<void>;
}
