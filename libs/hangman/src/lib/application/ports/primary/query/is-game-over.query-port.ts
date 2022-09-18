import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { GameOverQuery } from './game-over.query';

export const IS_GAME_OVER_QUERY_PORT = new InjectionToken<IsGameOverQueryPort>(
  'IS_GAME_OVER_QUERY_PORT'
);

export interface IsGameOverQueryPort {
  isGameOverQuery(): Observable<GameOverQuery>;
}
