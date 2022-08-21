import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectDifficultyLevelCommand } from './select-difficulty-level.command';

export const SELECT_DIFFICULTY_LEVEL_COMMAND_PORT =
  new InjectionToken<SelectDifficultyLevelCommandPort>(
    'SELECT_DIFFICULTY_LEVEL_COMMAND_PORT'
  );

export interface SelectDifficultyLevelCommandPort {
  selectDifficultyLevel(
    command: SelectDifficultyLevelCommand
  ): Observable<void>;
}
