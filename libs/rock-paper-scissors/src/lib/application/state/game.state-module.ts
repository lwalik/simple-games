import { NgModule } from '@angular/core';
import { GameState } from './game.state';
import { SELECT_PLAYERS_COUNT_COMMAND } from '../ports/primary/command/select-players-count.command-port';
import { SET_ACTIVE_PLAYER_COMMAND } from '../ports/primary/command/set-active-player.command-port';
import { SET_ACTIVE_ALL_PLAYERS_COMMAND } from '../ports/primary/command/set-active-all-players.command-port';
import { JOIN_PLAYER_COMMAND } from '../ports/primary/command/join-player.command-port';
import { SET_USERNAME_COMMAND } from '../ports/primary/command/set-username.command-port';
import { TAKE_PLAYER_COMMAND } from '../ports/primary/command/take-player.command-port';
import { INIT_BOARD_COMMAND } from '../ports/primary/command/init-board.command-port';
import { SWITCH_ACTIVE_STATUS_COMMAND } from '../ports/primary/command/switch-active-status.command-port';
import { GETS_CURRENT_PLAYER_IN_CONTEXT_QUERY } from '../ports/primary/query/gets-current-player-in-context.query-port';
import { SET_CHOICE_COMMAND } from '../ports/primary/command/set-choice.command-port';
import { SWITCH_READY_STATUS_COMMAND } from '../ports/primary/command/switch-ready-status.command-port';
import { RESET_QUEUE_STATUS_COMMAND } from '../ports/primary/command/reset-queue-status.command-port';
import { GETS_CURRENT_IN_GAME_QUERY } from '../ports/primary/query/gets-current-in-game.query-port';
import { GETS_CURRENT_IS_SELECT_PLAYER_COUNT_VISIBLE_QUERY } from '../ports/primary/query/gets-current-is-select-player-count-visible.query-port';
import { GETS_ALL_DISPLAY_PLAYER_ON_BOARD_QUERY } from '../ports/primary/query/gets-all-display-player-on-board.query-port';
import { SET_CURRENT_WINNER_COMMAND } from '../ports/primary/command/set-current-winner.command-port';
import { GETS_ALL_DISPLAY_WINNER_QUERY } from '../ports/primary/query/gets-all-display-winner.query-port';
import { GETS_CURRENT_IS_QUEUE_VISIBLE_QUERY } from '../ports/primary/query/gets-current-is-queue-visible.query-port';
import { WANT_NEXT_ROUND_COMMAND } from '../ports/primary/command/want-next-round.command-port';
import { START_NEXT_ROUND_COMMAND } from '../ports/primary/command/start-next-round.command-port';
import { GETS_CURRENT_QUEUE_STATUS_QUERY } from '../ports/primary/query/gets-current-queue-status.query-port';

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
    { provide: INIT_BOARD_COMMAND, useExisting: GameState },
    {
      provide: SWITCH_ACTIVE_STATUS_COMMAND,
      useExisting: GameState,
    },
    { provide: GETS_CURRENT_PLAYER_IN_CONTEXT_QUERY, useExisting: GameState },
    { provide: SET_CHOICE_COMMAND, useExisting: GameState },
    { provide: SWITCH_READY_STATUS_COMMAND, useExisting: GameState },
    { provide: RESET_QUEUE_STATUS_COMMAND, useExisting: GameState },
    { provide: GETS_CURRENT_IN_GAME_QUERY, useExisting: GameState },
    {
      provide: GETS_CURRENT_IS_SELECT_PLAYER_COUNT_VISIBLE_QUERY,
      useExisting: GameState,
    },
    { provide: GETS_ALL_DISPLAY_PLAYER_ON_BOARD_QUERY, useExisting: GameState },
    {
      provide: SET_CURRENT_WINNER_COMMAND,
      useExisting: GameState,
    },
    {
      provide: GETS_ALL_DISPLAY_WINNER_QUERY,
      useExisting: GameState,
    },
    {
      provide: GETS_CURRENT_IS_QUEUE_VISIBLE_QUERY,
      useExisting: GameState,
    },
    {
      provide: WANT_NEXT_ROUND_COMMAND,
      useExisting: GameState,
    },
    {
      provide: START_NEXT_ROUND_COMMAND,
      useExisting: GameState,
    },
    {
      provide: GETS_CURRENT_QUEUE_STATUS_QUERY,
      useExisting: GameState,
    },
  ],
  exports: [],
})
export class GameStateModule {}
