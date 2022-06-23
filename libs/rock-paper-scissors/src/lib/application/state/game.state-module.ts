import { NgModule } from '@angular/core';
import { GameState } from './game.state';
import { SELECT_PLAYERS_COUNT_COMMAND } from '../ports/primary/command/select-players-count.command-port';
import { GETS_ALL_DISPLAY_PLAYERS_QUERY } from '../ports/primary/query/gets-all-display-players.query-port';
import { SET_ACTIVE_PLAYER_COMMAND } from '../ports/primary/command/set-active-player.command-port';
import { SET_ACTIVE_ALL_PLAYERS_COMMAND } from '../ports/primary/command/set-active-all-players.command-port';
import { JOIN_PLAYER_COMMAND } from '../ports/primary/command/join-player.command-port';
import { SET_USERNAME_COMMAND } from '../ports/primary/command/set-username.command-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    GameState,
    { provide: SELECT_PLAYERS_COUNT_COMMAND, useExisting: GameState },
    { provide: GETS_ALL_DISPLAY_PLAYERS_QUERY, useExisting: GameState },
    { provide: SET_ACTIVE_PLAYER_COMMAND, useExisting: GameState },
    { provide: SET_ACTIVE_ALL_PLAYERS_COMMAND, useExisting: GameState },
    { provide: JOIN_PLAYER_COMMAND, useExisting: GameState },
    { provide: SET_USERNAME_COMMAND, useExisting: GameState },
  ],
  exports: [],
})
export class GameStateModule {}
