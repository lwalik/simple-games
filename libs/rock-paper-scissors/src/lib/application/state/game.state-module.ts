import { NgModule } from '@angular/core';
import { GameState } from './game.state';
import { SELECT_PLAYERS_COUNT_COMMAND } from '../ports/primary/command/select-players-count.command-port';
import { SET_ACTIVE_PLAYER_COMMAND } from '../ports/primary/command/set-active-player.command-port';
import { SET_ACTIVE_ALL_PLAYERS_COMMAND } from '../ports/primary/command/set-active-all-players.command-port';
import { JOIN_PLAYER_COMMAND } from '../ports/primary/command/join-player.command-port';
import { SET_USERNAME_COMMAND } from '../ports/primary/command/set-username.command-port';
import { TAKE_PLAYER_COMMAND } from '../ports/primary/command/take-player.command-port';
import { GETS_CURRENT_IS_PLAYER_IN_CONTEXT_QUERY } from '../ports/primary/query/gets-current-is-player-in-context.query-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    GameState,
    { provide: SELECT_PLAYERS_COUNT_COMMAND, useExisting: GameState },
    { provide: SET_ACTIVE_PLAYER_COMMAND, useExisting: GameState },
    { provide: SET_ACTIVE_ALL_PLAYERS_COMMAND, useExisting: GameState },
    { provide: JOIN_PLAYER_COMMAND, useExisting: GameState },
    { provide: SET_USERNAME_COMMAND, useExisting: GameState },
    { provide: TAKE_PLAYER_COMMAND, useExisting: GameState },
    {
      provide: GETS_CURRENT_IS_PLAYER_IN_CONTEXT_QUERY,
      useExisting: GameState,
    },
  ],
  exports: [],
})
export class GameStateModule {}
