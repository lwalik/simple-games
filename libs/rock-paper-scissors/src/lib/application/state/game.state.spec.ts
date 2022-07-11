import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PlayerDTO } from '../ports/secondary/dto/player.dto';
import { RpsBoardDTO } from '../ports/secondary/dto/rps-board.dto';
import { GameContext } from '../ports/secondary/context/game.context';
import { GameStateModule } from './game.state-module';
import { SETS_RPS_BOARD_DTO } from '../ports/secondary/dto/sets-rps-board.dto-port';
import { SETS_PLAYER_DTO } from '../ports/secondary/dto/sets-player.dto-port';
import { GETS_ALL_PLAYER_DTO } from '../ports/secondary/dto/gets-all-player.dto-port';
import { GETS_ONE_RPS_BOARD_DTO } from '../ports/secondary/dto/gets-one-rps-board.dto-port';
import { SELECTS_GAME_CONTEXT } from '../ports/secondary/context/selects-game.context-port';
import { PATCHES_GAME_CONTEXT } from '../ports/secondary/context/patches-game.context-port';
import { SETS_STATE_GAME_CONTEXT } from '../ports/secondary/context/sets-state-game.context-port';
import { SelectPlayersCountCommand } from '../ports/primary/command/select-players-count.command';
import { SELECT_PLAYERS_COUNT_COMMAND } from '../ports/primary/command/select-players-count.command-port';
import { SET_ACTIVE_PLAYER_COMMAND } from '../ports/primary/command/set-active-player.command-port';
import { SetActiveAllPlayersCommand } from '../ports/primary/command/set-active-all-players.command';
import { SET_ACTIVE_ALL_PLAYERS_COMMAND } from '../ports/primary/command/set-active-all-players.command-port';
import { JoinPlayerCommand } from '../ports/primary/command/join-player.command';
import { JOIN_PLAYER_COMMAND } from '../ports/primary/command/join-player.command-port';
import { SetUsernameCommand } from '../ports/primary/command/set-username.command';
import { SET_USERNAME_COMMAND } from '../ports/primary/command/set-username.command-port';
import { TakePlayerCommand } from '../ports/primary/command/take-player.command';
import { TAKE_PLAYER_COMMAND } from '../ports/primary/command/take-player.command-port';
import { InitBoardCommand } from '../ports/primary/command/init-board.command';
import { INIT_BOARD_COMMAND } from '../ports/primary/command/init-board.command-port';
import { SwitchActiveStatusCommand } from '../ports/primary/command/switch-active-status.command';
import { SWITCH_ACTIVE_STATUS_COMMAND } from '../ports/primary/command/switch-active-status.command-port';
import { GETS_CURRENT_PLAYER_IN_CONTEXT_QUERY } from '../ports/primary/query/gets-current-player-in-context.query-port';
import { SetChoiceCommand } from '../ports/primary/command/set-choice.command';
import { SET_CHOICE_COMMAND } from '../ports/primary/command/set-choice.command-port';
import { SwitchReadyStatusCommand } from '../ports/primary/command/switch-ready-status.command';
import { SWITCH_READY_STATUS_COMMAND } from '../ports/primary/command/switch-ready-status.command-port';
import { ResetQueueStatusCommand } from '../ports/primary/command/reset-queue-status.command';
import { RESET_QUEUE_STATUS_COMMAND } from '../ports/primary/command/reset-queue-status.command-port';
import { GETS_CURRENT_IN_GAME_QUERY } from '../ports/primary/query/gets-current-in-game.query-port';
import { GETS_CURRENT_IS_SELECT_PLAYER_COUNT_VISIBLE_QUERY } from '../ports/primary/query/gets-current-is-select-player-count-visible.query-port';
import { GETS_ALL_DISPLAY_PLAYER_ON_BOARD_QUERY } from '../ports/primary/query/gets-all-display-player-on-board.query-port';
import { GETS_ALL_DISPLAY_WINNER_QUERY } from '../ports/primary/query/gets-all-display-winner.query-port';
import { GETS_CURRENT_IS_QUEUE_VISIBLE_QUERY } from '../ports/primary/query/gets-current-is-queue-visible.query-port';
import { WantNextRoundCommand } from '../ports/primary/command/want-next-round.command';
import { WANT_NEXT_ROUND_COMMAND } from '../ports/primary/command/want-next-round.command-port';
import { StartNextRoundCommand } from '../ports/primary/command/start-next-round.command';
import { START_NEXT_ROUND_COMMAND } from '../ports/primary/command/start-next-round.command-port';
import { SetActivePlayersCommand } from '../ports/primary/command/set-active-player.command';

describe('GameState', () => {
  const given = (
    data: Partial<{
      getsAllPlayerDtoPortStub: PlayerDTO[];
      getsOneRpsBoardDtoPortStub: RpsBoardDTO;
      selectsGameContextPortStub: GameContext;
    }>
  ) => {
    TestBed.configureTestingModule({
      imports: [GameStateModule],
      providers: [
        {
          provide: SETS_RPS_BOARD_DTO,
          useValue: {
            set: () => of(void 0),
          },
        },
        {
          provide: SETS_PLAYER_DTO,
          useValue: {
            set: () => of(void 0),
          },
        },
        {
          provide: GETS_ALL_PLAYER_DTO,
          useValue: {
            getAll: () => of(data.getsAllPlayerDtoPortStub),
          },
        },
        {
          provide: GETS_ONE_RPS_BOARD_DTO,
          useValue: {
            getOne: () => of(data.getsOneRpsBoardDtoPortStub),
          },
        },
        {
          provide: SELECTS_GAME_CONTEXT,
          useValue: {
            select: () => of(data.selectsGameContextPortStub),
          },
        },
        {
          provide: PATCHES_GAME_CONTEXT,
          useValue: {
            patch: () => of(void 0),
          },
        },
        {
          provide: SETS_STATE_GAME_CONTEXT,
          useValue: {
            setState: () => of(void 0),
          },
        },
      ],
    });

    return {
      setsRpsBoardDtoPortSetSpy: jest.spyOn(
        TestBed.inject(SETS_RPS_BOARD_DTO),
        'set'
      ),
      setsPlayerDtoPortSetSpy: jest.spyOn(
        TestBed.inject(SETS_PLAYER_DTO),
        'set'
      ),
      patchesGameContextPortPatchSpy: jest.spyOn(
        TestBed.inject(PATCHES_GAME_CONTEXT),
        'patch'
      ),
      setsStateGameContextPortSetStateSpy: jest.spyOn(
        TestBed.inject(SETS_STATE_GAME_CONTEXT),
        'setState'
      ),
      selectPlayersCount: (command: SelectPlayersCountCommand) =>
        TestBed.inject(SELECT_PLAYERS_COUNT_COMMAND)
          .selectPlayersCount(command)
          .toPromise(),
      setActivePlayer: (command: SetActivePlayersCommand) =>
        TestBed.inject(SET_ACTIVE_PLAYER_COMMAND)
          .setActivePlayer(command)
          .toPromise(),
      setActiveAllPlayers: (command: SetActiveAllPlayersCommand) =>
        TestBed.inject(SET_ACTIVE_ALL_PLAYERS_COMMAND)
          .setActiveAllPlayers(command)
          .toPromise(),
      joinPlayer: (command: JoinPlayerCommand) =>
        TestBed.inject(JOIN_PLAYER_COMMAND).joinPlayer(command).toPromise(),
      setUsername: (command: SetUsernameCommand) =>
        TestBed.inject(SET_USERNAME_COMMAND).setUsername(command).toPromise(),
      takePlayer: (command: TakePlayerCommand) =>
        TestBed.inject(TAKE_PLAYER_COMMAND).takePlayer(command).toPromise(),
      initBoard: (command: InitBoardCommand) =>
        TestBed.inject(INIT_BOARD_COMMAND).initBoard(command).toPromise(),
      switchActiveStatus: (command: SwitchActiveStatusCommand) =>
        TestBed.inject(SWITCH_ACTIVE_STATUS_COMMAND)
          .switchActiveStatus(command)
          .toPromise(),
      getCurrentPlayerInContextQuery: () =>
        TestBed.inject(GETS_CURRENT_PLAYER_IN_CONTEXT_QUERY)
          .getCurrentPlayerInContextQuery()
          .toPromise(),
      setChoice: (command: SetChoiceCommand) =>
        TestBed.inject(SET_CHOICE_COMMAND).setChoice(command).toPromise(),
      switchReadyStatus: (command: SwitchReadyStatusCommand) =>
        TestBed.inject(SWITCH_READY_STATUS_COMMAND)
          .switchReadyStatus(command)
          .toPromise(),
      resetQueueStatus: (command: ResetQueueStatusCommand) =>
        TestBed.inject(RESET_QUEUE_STATUS_COMMAND)
          .resetQueueStatus(command)
          .toPromise(),
      getCurrentInGameQuery: () =>
        TestBed.inject(GETS_CURRENT_IN_GAME_QUERY)
          .getCurrentInGameQuery()
          .toPromise(),
      getCurrentIsSelectPlayerCountVisibleQuery: () =>
        TestBed.inject(GETS_CURRENT_IS_SELECT_PLAYER_COUNT_VISIBLE_QUERY)
          .getCurrentIsSelectPlayerCountVisibleQuery()
          .toPromise(),
      getAllDisplayPlayerOnBoardQuery: () =>
        TestBed.inject(GETS_ALL_DISPLAY_PLAYER_ON_BOARD_QUERY)
          .getAllDisplayPlayerOnBoardQuery()
          .toPromise(),
      getAllDisplayWinnerQuery: () =>
        TestBed.inject(GETS_ALL_DISPLAY_WINNER_QUERY)
          .getAllDisplayWinnerQuery()
          .toPromise(),
      getCurrentIsQueueVisibleQuery: () =>
        TestBed.inject(GETS_CURRENT_IS_QUEUE_VISIBLE_QUERY)
          .getCurrentIsQueueVisibleQuery()
          .toPromise(),
      wantNextRound: (command: WantNextRoundCommand) =>
        TestBed.inject(WANT_NEXT_ROUND_COMMAND)
          .wantNextRound(command)
          .toPromise(),
      startNextRound: (command: StartNextRoundCommand) =>
        TestBed.inject(START_NEXT_ROUND_COMMAND)
          .startNextRound(command)
          .toPromise(),
    };
  };
});
