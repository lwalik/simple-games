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
import { PlayerInContextQuery } from '../ports/primary/query/player-in-context.query';
import { InGameQuery } from '../ports/primary/query/in-game.query';
import { IsSelectPlayerCountVisibleQuery } from '../ports/primary/query/is-select-player-count-visible.query';
import { DisplayPlayerOnBoardQuery } from '../ports/primary/query/display-player-on-board.query';
import { SetActivePlayersCommand } from '../ports/primary/command/set-active-player.command';

const PLAYER_DTO_STUB: PlayerDTO = {
  id: '123abc',
  playerId: 1,
  username: 'testUser',
  isActive: false,
  isReady: false,
  choice: '',
  wantNext: false,
};

const RPS_BOARD_STUB: RpsBoardDTO = {
  id: 'sa1235asd1',
  players: [
    PLAYER_DTO_STUB,
    { ...PLAYER_DTO_STUB, id: '231abc', playerId: 2, username: 'testUser2' },
    { ...PLAYER_DTO_STUB, id: '312abc', playerId: 3, username: 'testUser3' },
  ],
  maxPlayers: 3,
  currentWinner: [PLAYER_DTO_STUB],
};

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
  [
    {
      givenData: {
        patchesGameContextPortPatchSpy: {},
        selectsGameContextPortStub: {
          currentPlayer: {
            id: '123abc',
            playerId: 1,
            username: 'testUser',
            isActive: false,
            isReady: false,
            choice: '',
            wantNext: false,
          },
          othersPlayers: [
            {
              ...PLAYER_DTO_STUB,
              id: '231abc',
              playerId: 2,
              username: 'testUser2',
            },
            {
              ...PLAYER_DTO_STUB,
              id: '312abc',
              playerId: 3,
              username: 'testUser3',
            },
          ],
          queueStatus: true,
          inGame: false,
        },
      },
      whenData: new SetUsernameCommand('Bob'),
      thenData: {
        patchesGameContextPortPatchSpyParams: {
          currentPlayer: {
            id: '123abc',
            playerId: 1,
            username: 'Bob',
            isActive: false,
            isReady: false,
            choice: '',
            wantNext: false,
          },
          queueStatus: false,
        },
      },
    },
    {
      givenData: {
        patchesGameContextPortPatchSpy: {},
        selectsGameContextPortStub: {
          currentPlayer: {
            ...PLAYER_DTO_STUB,
            id: '231abc',
            playerId: 2,
            username: 'testUser2',
          },
          othersPlayers: [
            {
              id: '123abc',
              playerId: 1,
              username: 'testUser',
              isActive: false,
              isReady: false,
              choice: '',
              wantNext: false,
            },
            {
              ...PLAYER_DTO_STUB,
              id: '312abc',
              playerId: 3,
              username: 'testUser3',
            },
          ],
          queueStatus: true,
          inGame: false,
        },
      },
      whenData: new SetUsernameCommand('John'),
      thenData: {
        patchesGameContextPortPatchSpyParams: {
          currentPlayer: {
            ...PLAYER_DTO_STUB,
            id: '231abc',
            playerId: 2,
            username: 'John',
          },
          queueStatus: false,
        },
      },
    },
  ].forEach(({ givenData, whenData, thenData }, i) =>
    it(`should handle setUsername #${i + 1}`, async () => {
      const { patchesGameContextPortPatchSpy, setUsername } = given(givenData);
      await setUsername(whenData);
      expect(patchesGameContextPortPatchSpy).toHaveBeenCalledWith(
        thenData.patchesGameContextPortPatchSpyParams
      );
    })
  );
  [
    {
      givenData: {},
      whenData: new TakePlayerCommand(PLAYER_DTO_STUB),
      thenData: {
        setsStateGameContextPortSetStateSpyParams: {
          currentPlayer: PLAYER_DTO_STUB,
          othersPlayers: [],
          queueStatus: true,
          inGame: false,
        },
      },
    },
    {
      givenData: {},
      whenData: new TakePlayerCommand({ ...PLAYER_DTO_STUB, playerId: 2 }),
      thenData: {
        setsStateGameContextPortSetStateSpyParams: {
          currentPlayer: { ...PLAYER_DTO_STUB, playerId: 2 },
          othersPlayers: [],
          queueStatus: true,
          inGame: false,
        },
      },
    },
  ].forEach(({ givenData, whenData, thenData }, i) =>
    it(`should handle takePlayer #${i + 1}`, async () => {
      const { setsStateGameContextPortSetStateSpy, takePlayer } =
        given(givenData);
      await takePlayer(whenData);
      expect(setsStateGameContextPortSetStateSpy).toHaveBeenCalledWith(
        thenData.setsStateGameContextPortSetStateSpyParams
      );
    })
  );
  [
    {
      givenData: { getsOneRpsBoardDtoPortStub: RPS_BOARD_STUB },
      whenData: {},
      thenData: {
        patchesGameContextPortPatchSpyParams: {
          currentPlayer: {},
          othersPlayers: [],
        },
        setsRpsBoardDtoPortSetSpyParams: {
          ...RPS_BOARD_STUB,
          players: [],
        },
      },
    },
  ].forEach(({ givenData, whenData, thenData }, i) =>
    it(`should handle initBoard #${i + 1}`, async () => {
      const {
        patchesGameContextPortPatchSpy,
        setsRpsBoardDtoPortSetSpy,
        initBoard,
      } = given(givenData);
      await initBoard(whenData);
      expect(patchesGameContextPortPatchSpy).toHaveBeenCalledWith(
        thenData.patchesGameContextPortPatchSpyParams
      );
      expect(setsRpsBoardDtoPortSetSpy).toHaveBeenCalledWith(
        thenData.setsRpsBoardDtoPortSetSpyParams
      );
    })
  );
  [
    {
      givenData: {
        selectsGameContextPortStub: {
          currentPlayer: { ...PLAYER_DTO_STUB, playerId: 1, isActive: true },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
      },
      whenData: {},
      thenData: {
        setsStateGameContextPortSetStateSpyParams: {
          currentPlayer: { ...PLAYER_DTO_STUB, playerId: 1, isActive: false },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
        setsPlayerDtoPortSetSpyParams: {
          id: PLAYER_DTO_STUB.id,
          isActive: false,
        },
      },
    },
    {
      givenData: {
        selectsGameContextPortStub: {
          currentPlayer: { ...PLAYER_DTO_STUB, playerId: 1, isActive: false },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
      },
      whenData: {},
      thenData: {
        setsStateGameContextPortSetStateSpyParams: {
          currentPlayer: { ...PLAYER_DTO_STUB, playerId: 1, isActive: true },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
        setsPlayerDtoPortSetSpyParams: {
          id: PLAYER_DTO_STUB.id,
          isActive: true,
        },
      },
    },
  ].forEach(({ givenData, whenData, thenData }, i) =>
    it(`should handle switchActiveStatus #${i + 1}`, async () => {
      const {
        setsStateGameContextPortSetStateSpy,
        setsPlayerDtoPortSetSpy,
        switchActiveStatus,
      } = given(givenData);
      await switchActiveStatus(whenData);
      expect(setsStateGameContextPortSetStateSpy).toHaveBeenCalledWith(
        thenData.setsStateGameContextPortSetStateSpyParams
      );
      expect(setsPlayerDtoPortSetSpy).toHaveBeenCalledWith(
        thenData.setsPlayerDtoPortSetSpyParams
      );
    })
  );
  [
    {
      givenData: {
        selectsGameContextPortStub: {
          currentPlayer: { ...PLAYER_DTO_STUB, playerId: 1 },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
      },
      whenData: {},
      thenData: {
        getCurrentPlayerInContextQuery: new PlayerInContextQuery({
          ...PLAYER_DTO_STUB,
          playerId: 1,
        }),
      },
    },
    {
      givenData: {
        selectsGameContextPortStub: {
          currentPlayer: { ...PLAYER_DTO_STUB, playerId: 3 },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
      },
      whenData: {},
      thenData: {
        getCurrentPlayerInContextQuery: new PlayerInContextQuery({
          ...PLAYER_DTO_STUB,
          playerId: 3,
        }),
      },
    },
  ].forEach(({ givenData, whenData, thenData }, i) =>
    it(`should handle getCurrentPlayerInContextQuery #${i + 1}`, async () => {
      const { getCurrentPlayerInContextQuery } = given(givenData);

      const actual = await getCurrentPlayerInContextQuery();

      expect(actual).toEqual(thenData.getCurrentPlayerInContextQuery);
    })
  );
  [
    {
      givenData: {
        getsOneRpsBoardDtoPortStub: {
          ...RPS_BOARD_STUB,
          players: [
            PLAYER_DTO_STUB,
            {
              ...PLAYER_DTO_STUB,
              id: '231abc',
              playerId: 2,
              username: 'testUser2',
            },
            {
              ...PLAYER_DTO_STUB,
              id: '312abc',
              playerId: 3,
              username: 'testUser3',
              choice: '',
            },
          ],
        },
        selectsGameContextPortStub: {
          currentPlayer: { ...PLAYER_DTO_STUB, playerId: 3, choice: '' },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
      },
      whenData: new SetChoiceCommand('rock'),
      thenData: {
        patchesGameContextPortPatchSpyParams: {
          currentPlayer: { ...PLAYER_DTO_STUB, playerId: 3, choice: 'rock' },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
        setsRpsBoardDtoPortSetSpyParams: {
          ...RPS_BOARD_STUB,
          players: [
            PLAYER_DTO_STUB,
            {
              ...PLAYER_DTO_STUB,
              id: '231abc',
              playerId: 2,
              username: 'testUser2',
            },
            {
              ...PLAYER_DTO_STUB,
              id: '312abc',
              playerId: 3,
              username: 'testUser3',
              choice: 'rock',
            },
          ],
        },
      },
    },
    {
      givenData: {
        getsOneRpsBoardDtoPortStub: {
          ...RPS_BOARD_STUB,
          players: [
            PLAYER_DTO_STUB,
            {
              ...PLAYER_DTO_STUB,
              id: '231abc',
              playerId: 2,
              username: 'testUser2',
            },
            {
              ...PLAYER_DTO_STUB,
              id: '312abc',
              playerId: 3,
              username: 'testUser3',
              choice: '',
            },
          ],
        },
        selectsGameContextPortStub: {
          currentPlayer: { ...PLAYER_DTO_STUB, playerId: 3, choice: '' },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
      },
      whenData: new SetChoiceCommand('paper'),
      thenData: {
        patchesGameContextPortPatchSpyParams: {
          currentPlayer: { ...PLAYER_DTO_STUB, playerId: 3, choice: 'paper' },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
        setsRpsBoardDtoPortSetSpyParams: {
          ...RPS_BOARD_STUB,
          players: [
            PLAYER_DTO_STUB,
            {
              ...PLAYER_DTO_STUB,
              id: '231abc',
              playerId: 2,
              username: 'testUser2',
            },
            {
              ...PLAYER_DTO_STUB,
              id: '312abc',
              playerId: 3,
              username: 'testUser3',
              choice: 'paper',
            },
          ],
        },
      },
    },
    {
      givenData: {
        getsOneRpsBoardDtoPortStub: {
          ...RPS_BOARD_STUB,
          players: [
            PLAYER_DTO_STUB,
            {
              ...PLAYER_DTO_STUB,
              id: '231abc',
              playerId: 2,
              username: 'testUser2',
            },
            {
              ...PLAYER_DTO_STUB,
              id: '312abc',
              playerId: 3,
              username: 'testUser3',
              choice: '',
            },
          ],
        },
        selectsGameContextPortStub: {
          currentPlayer: { ...PLAYER_DTO_STUB, playerId: 3, choice: '' },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
      },
      whenData: new SetChoiceCommand('scissors'),
      thenData: {
        patchesGameContextPortPatchSpyParams: {
          currentPlayer: {
            ...PLAYER_DTO_STUB,
            playerId: 3,
            choice: 'scissors',
          },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
        setsRpsBoardDtoPortSetSpyParams: {
          ...RPS_BOARD_STUB,
          players: [
            PLAYER_DTO_STUB,
            {
              ...PLAYER_DTO_STUB,
              id: '231abc',
              playerId: 2,
              username: 'testUser2',
            },
            {
              ...PLAYER_DTO_STUB,
              id: '312abc',
              playerId: 3,
              username: 'testUser3',
              choice: 'scissors',
            },
          ],
        },
      },
    },
  ].forEach(({ givenData, whenData, thenData }, i) =>
    it(`should handle setChoice #${i + 1}`, async () => {
      const {
        patchesGameContextPortPatchSpy,
        setsRpsBoardDtoPortSetSpy,
        setChoice,
      } = given(givenData);
      await setChoice(whenData);
      expect(patchesGameContextPortPatchSpy).toHaveBeenCalledWith(
        thenData.patchesGameContextPortPatchSpyParams
      );
      expect(setsRpsBoardDtoPortSetSpy).toHaveBeenCalledWith(
        thenData.setsRpsBoardDtoPortSetSpyParams
      );
    })
  );
  [
    {
      givenData: {
        getsOneRpsBoardDtoPortStub: {
          ...RPS_BOARD_STUB,
          players: [
            PLAYER_DTO_STUB,
            {
              ...PLAYER_DTO_STUB,
              id: '231abc',
              playerId: 2,
              username: 'testUser2',
            },
            {
              ...PLAYER_DTO_STUB,
              id: '312abc',
              playerId: 3,
              username: 'testUser3',
              choice: '',
              isReady: false,
            },
          ],
        },
        selectsGameContextPortStub: {
          currentPlayer: {
            ...PLAYER_DTO_STUB,
            playerId: 3,
            choice: '',
            isReady: false,
          },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
      },
      whenData: new SwitchReadyStatusCommand(),
      thenData: {
        setsRpsBoardDtoPortSetSpyParams: {
          ...RPS_BOARD_STUB,
          players: [
            PLAYER_DTO_STUB,
            {
              ...PLAYER_DTO_STUB,
              id: '231abc',
              playerId: 2,
              username: 'testUser2',
            },
            { ...PLAYER_DTO_STUB, playerId: 3, choice: '', isReady: true },
          ],
        },
        patchesGameContextPortPatchSpyParams: {
          currentPlayer: {
            ...PLAYER_DTO_STUB,
            playerId: 3,
            choice: '',
            isReady: true,
          },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
      },
    },
    {
      givenData: {
        getsOneRpsBoardDtoPortStub: {
          ...RPS_BOARD_STUB,
          players: [
            PLAYER_DTO_STUB,
            {
              ...PLAYER_DTO_STUB,
              id: '231abc',
              playerId: 2,
              username: 'testUser2',
            },
            {
              ...PLAYER_DTO_STUB,
              id: '312abc',
              playerId: 3,
              username: 'testUser3',
              choice: '',
              isReady: true,
            },
          ],
        },
        selectsGameContextPortStub: {
          currentPlayer: {
            ...PLAYER_DTO_STUB,
            playerId: 3,
            choice: '',
            isReady: true,
          },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
      },
      whenData: new SwitchReadyStatusCommand(),
      thenData: {
        setsRpsBoardDtoPortSetSpyParams: {
          ...RPS_BOARD_STUB,
          players: [
            PLAYER_DTO_STUB,
            {
              ...PLAYER_DTO_STUB,
              id: '231abc',
              playerId: 2,
              username: 'testUser2',
            },
            { ...PLAYER_DTO_STUB, playerId: 3, choice: '', isReady: false },
          ],
        },
        patchesGameContextPortPatchSpyParams: {
          currentPlayer: {
            ...PLAYER_DTO_STUB,
            playerId: 3,
            choice: '',
            isReady: false,
          },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
      },
    },
  ].forEach(({ givenData, whenData, thenData }, i) =>
    it(`should handle switchReadyStatus #${i + 1}`, async () => {
      const {
        setsRpsBoardDtoPortSetSpy,
        patchesGameContextPortPatchSpy,
        switchReadyStatus,
      } = given(givenData);
      await switchReadyStatus(whenData);
      expect(setsRpsBoardDtoPortSetSpy).toHaveBeenCalledWith(
        thenData.setsRpsBoardDtoPortSetSpyParams
      );
      expect(patchesGameContextPortPatchSpy).toHaveBeenCalledWith(
        thenData.patchesGameContextPortPatchSpyParams
      );
    })
  );
  [
    {
      givenData: {},
      whenData: new ResetQueueStatusCommand(),
      thenData: { patchesGameContextPortPatchSpyParams: { queueStatus: true } },
    },
  ].forEach(({ givenData, whenData, thenData }, i) =>
    it(`should handle resetQueueStatus #${i + 1}`, async () => {
      const { patchesGameContextPortPatchSpy, resetQueueStatus } =
        given(givenData);
      await resetQueueStatus(whenData);
      expect(patchesGameContextPortPatchSpy).toHaveBeenCalledWith(
        thenData.patchesGameContextPortPatchSpyParams
      );
    })
  );
  [
    {
      givenData: {
        selectsGameContextPortStub: {
          currentPlayer: {
            ...PLAYER_DTO_STUB,
            playerId: 3,
            choice: '',
            isReady: false,
          },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
      },
      whenData: {},
      thenData: { getCurrentInGameQuery: new InGameQuery(false) },
    },
    {
      givenData: {
        selectsGameContextPortStub: {
          currentPlayer: {
            ...PLAYER_DTO_STUB,
            playerId: 3,
            choice: '',
            isReady: false,
          },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: true,
        },
      },
      whenData: {},
      thenData: { getCurrentInGameQuery: new InGameQuery(true) },
    },
  ].forEach(({ givenData, whenData, thenData }, i) =>
    it(`should handle getCurrentInGameQuery #${i + 1}`, async () => {
      const { getCurrentInGameQuery } = given(givenData);

      const actual = await getCurrentInGameQuery();

      expect(actual).toEqual(thenData.getCurrentInGameQuery);
    })
  );
  [
    {
      givenData: {
        getsOneRpsBoardDtoPortStub: {
          ...RPS_BOARD_STUB,
          players: [
            PLAYER_DTO_STUB,
            {
              ...PLAYER_DTO_STUB,
              id: '231abc',
              playerId: 2,
              username: 'testUser2',
            },
            {
              ...PLAYER_DTO_STUB,
              id: '312abc',
              playerId: 3,
              username: 'testUser3',
              choice: '',
              isReady: true,
            },
          ],
        },
      },
      whenData: {},
      thenData: {
        getCurrentIsSelectPlayerCountVisibleQuery:
          new IsSelectPlayerCountVisibleQuery(false),
      },
    },
    {
      givenData: {
        getsOneRpsBoardDtoPortStub: {
          ...RPS_BOARD_STUB,
          players: [],
        },
      },
      whenData: {},
      thenData: {
        getCurrentIsSelectPlayerCountVisibleQuery:
          new IsSelectPlayerCountVisibleQuery(true),
      },
    },
  ].forEach(({ givenData, whenData, thenData }, i) =>
    it(`should handle getCurrentIsSelectPlayerCountVisibleQuery #${
      i + 1
    }`, async () => {
      const { getCurrentIsSelectPlayerCountVisibleQuery } = given(givenData);

      const actual = await getCurrentIsSelectPlayerCountVisibleQuery();

      expect(actual).toEqual(
        thenData.getCurrentIsSelectPlayerCountVisibleQuery
      );
    })
  );
  [
    {
      givenData: {
        getsOneRpsBoardDtoPortStub: {
          ...RPS_BOARD_STUB,
          maxPlayers: 3,
          players: [
            {
              ...PLAYER_DTO_STUB,
              id: '321abc',
              playerId: 1,
              username: 'testUser1',
              choice: 'paper',
              isReady: true,
              wantNext: false,
            },
            {
              ...PLAYER_DTO_STUB,
              id: '231abc',
              playerId: 2,
              username: 'testUser2',
              choice: 'rock',
              isReady: false,
              wantNext: false,
            },
            {
              ...PLAYER_DTO_STUB,
              id: '312abc',
              playerId: 3,
              username: 'testUser3',
              choice: '',
              isReady: false,
              wantNext: false,
            },
          ],
        },
        selectsGameContextPortStub: {
          currentPlayer: {
            ...PLAYER_DTO_STUB,
            username: 'testUser3',
            playerId: 3,
          },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
      },
      whenData: {},
      thenData: {
        getAllDisplayPlayerOnBoardQuery: [
          new DisplayPlayerOnBoardQuery(
            'testUser1',
            { name: 'paper', isVisible: false },
            true,
            false,
            false
          ),
          new DisplayPlayerOnBoardQuery(
            'testUser2',
            { name: 'rock', isVisible: false },
            false,
            false,
            false
          ),
          new DisplayPlayerOnBoardQuery(
            'testUser3',
            { name: '', isVisible: true },
            false,
            true,
            false
          ),
        ],
      },
    },
    {
      givenData: {
        getsOneRpsBoardDtoPortStub: {
          ...RPS_BOARD_STUB,
          maxPlayers: 2,
          players: [
            {
              ...PLAYER_DTO_STUB,
              id: '321abc',
              playerId: 1,
              username: 'testUser1',
              choice: 'paper',
              isReady: true,
              wantNext: false,
            },
            {
              ...PLAYER_DTO_STUB,
              id: '231abc',
              playerId: 2,
              username: 'testUser2',
              choice: 'rock',
              isReady: true,
              wantNext: false,
            },
          ],
        },
        selectsGameContextPortStub: {
          currentPlayer: {
            ...PLAYER_DTO_STUB,
            username: 'testUser1',
            playerId: 1,
          },
          othersPlayers: [{ ...PLAYER_DTO_STUB, playerId: 2 }],
          queueStatus: false,
          inGame: false,
        },
      },
      whenData: {},
      thenData: {
        getAllDisplayPlayerOnBoardQuery: [
          new DisplayPlayerOnBoardQuery(
            'testUser1',
            { name: 'paper', isVisible: true },
            true,
            true,
            false
          ),
          new DisplayPlayerOnBoardQuery(
            'testUser2',
            { name: 'rock', isVisible: true },
            true,
            false,
            false
          ),
        ],
      },
    },
  ].forEach(({ givenData, whenData, thenData }, i) =>
    it(`should handle getAllDisplayPlayerOnBoardQuery #${i + 1}`, async () => {
      const { getAllDisplayPlayerOnBoardQuery } = given(givenData);

      const actual = await getAllDisplayPlayerOnBoardQuery();

      expect(actual).toEqual(thenData.getAllDisplayPlayerOnBoardQuery);
    })
  );
});
