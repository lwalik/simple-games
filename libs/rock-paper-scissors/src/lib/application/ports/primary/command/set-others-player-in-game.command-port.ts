import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SetOthersPlayerInGameCommand } from './set-others-player-in-game.command';

export const SET_OTHERS_PLAYER_IN_GAME_COMMAND =
  new InjectionToken<SetOthersPlayerInGameCommandPort>(
    'SET_OTHERS_PLAYER_IN_GAME_COMMAND'
  );

export interface SetOthersPlayerInGameCommandPort {
  setOthersPlayerInGame(
    command: SetOthersPlayerInGameCommand
  ): Observable<void>;
}
