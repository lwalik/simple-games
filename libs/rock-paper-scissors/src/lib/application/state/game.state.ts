import { Inject, Injectable } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { SelectPlayersCountCommandPort } from '../ports/primary/command/select-players-count.command-port';
import { SetActivePlayerCommandPort } from '../ports/primary/command/set-active-player.command-port';
import { SetActiveAllPlayersCommandPort } from '../ports/primary/command/set-active-all-players.command-port';
import { JoinPlayerCommandPort } from '../ports/primary/command/join-player.command-port';
import { SetUsernameCommandPort } from '../ports/primary/command/set-username.command-port';
import { TakePlayerCommandPort } from '../ports/primary/command/take-player.command-port';
import { InitBoardCommandPort } from '../ports/primary/command/init-board.command-port';
import { SwitchActiveStatusCommandPort } from '../ports/primary/command/switch-active-status.command-port';
import { GetsCurrentPlayerInContextQueryPort } from '../ports/primary/query/gets-current-player-in-context.query-port';
import { SetChoiceCommandPort } from '../ports/primary/command/set-choice.command-port';
import { SwitchReadyStatusCommandPort } from '../ports/primary/command/switch-ready-status.command-port';
import { ResetQueueStatusCommandPort } from '../ports/primary/command/reset-queue-status.command-port';
import { GetsCurrentInGameQueryPort } from '../ports/primary/query/gets-current-in-game.query-port';
import { GetsCurrentIsSelectPlayerCountVisibleQueryPort } from '../ports/primary/query/gets-current-is-select-player-count-visible.query-port';
import { GetsAllDisplayPlayerOnBoardQueryPort } from '../ports/primary/query/gets-all-display-player-on-board.query-port';
import { GetsAllDisplayWinnerQueryPort } from '../ports/primary/query/gets-all-display-winner.query-port';
import { GetsCurrentIsQueueVisibleQueryPort } from '../ports/primary/query/gets-current-is-queue-visible.query-port';
import { StartNextRoundCommandPort } from '../ports/primary/command/start-next-round.command-port';
import {
  SETS_RPS_BOARD_DTO,
  SetsRpsBoardDtoPort,
} from '../ports/secondary/dto/sets-rps-board.dto-port';
import {
  SETS_PLAYER_DTO,
  SetsPlayerDtoPort,
} from '../ports/secondary/dto/sets-player.dto-port';
import {
  GETS_ALL_PLAYER_DTO,
  GetsAllPlayerDtoPort,
} from '../ports/secondary/dto/gets-all-player.dto-port';
import {
  GETS_ONE_RPS_BOARD_DTO,
  GetsOneRpsBoardDtoPort,
} from '../ports/secondary/dto/gets-one-rps-board.dto-port';
import {
  SELECTS_GAME_CONTEXT,
  SelectsGameContextPort,
} from '../ports/secondary/context/selects-game.context-port';
import {
  PATCHES_GAME_CONTEXT,
  PatchesGameContextPort,
} from '../ports/secondary/context/patches-game.context-port';
import {
  SETS_STATE_GAME_CONTEXT,
  SetsStateGameContextPort,
} from '../ports/secondary/context/sets-state-game.context-port';
import { SelectPlayersCountCommand } from '../ports/primary/command/select-players-count.command';
import { SetActiveAllPlayersCommand } from '../ports/primary/command/set-active-all-players.command';
import { JoinPlayerCommand } from '../ports/primary/command/join-player.command';
import { SetUsernameCommand } from '../ports/primary/command/set-username.command';
import { TakePlayerCommand } from '../ports/primary/command/take-player.command';
import { InitBoardCommand } from '../ports/primary/command/init-board.command';
import { PlayerDTO } from '../ports/secondary/dto/player.dto';
import { SwitchActiveStatusCommand } from '../ports/primary/command/switch-active-status.command';
import { PlayerInContextQuery } from '../ports/primary/query/player-in-context.query';
import { GameContext } from '../ports/secondary/context/game.context';
import { SetChoiceCommand } from '../ports/primary/command/set-choice.command';
import { SwitchReadyStatusCommand } from '../ports/primary/command/switch-ready-status.command';
import { ResetQueueStatusCommand } from '../ports/primary/command/reset-queue-status.command';
import { InGameQuery } from '../ports/primary/query/in-game.query';
import { IsSelectPlayerCountVisibleQuery } from '../ports/primary/query/is-select-player-count-visible.query';
import { RpsBoardDTO } from '../ports/secondary/dto/rps-board.dto';
import { DisplayPlayerOnBoardQuery } from '../ports/primary/query/display-player-on-board.query';
import { DisplayWinnerQuery } from '../ports/primary/query/display-winner.query';
import { SetCurrentWinnerCommand } from '../ports/primary/command/set-current-winner.command';
import { IsQueueVisibleQuery } from '../ports/primary/query/is-queue-visible.query';
import { WantNextRoundCommand } from '../ports/primary/command/want-next-round.command';
import { StartNextRoundCommand } from '../ports/primary/command/start-next-round.command';
import { WantNextRoundCommandPort } from '../ports/primary/command/want-next-round.command-port';
import { SetActivePlayersCommand } from '../ports/primary/command/set-active-player.command';

@Injectable()
export class GameState
  implements
    SelectPlayersCountCommandPort,
    SetActivePlayerCommandPort,
    SetActiveAllPlayersCommandPort,
    JoinPlayerCommandPort,
    SetUsernameCommandPort,
    TakePlayerCommandPort,
    InitBoardCommandPort,
    SwitchActiveStatusCommandPort,
    GetsCurrentPlayerInContextQueryPort,
    SetChoiceCommandPort,
    SwitchReadyStatusCommandPort,
    ResetQueueStatusCommandPort,
    GetsCurrentInGameQueryPort,
    GetsCurrentIsSelectPlayerCountVisibleQueryPort,
    GetsAllDisplayPlayerOnBoardQueryPort,
    GetsAllDisplayWinnerQueryPort,
    GetsCurrentIsQueueVisibleQueryPort,
    WantNextRoundCommandPort,
    StartNextRoundCommandPort
{
  constructor(
    @Inject(SETS_RPS_BOARD_DTO) private _setsRpsBoardDto: SetsRpsBoardDtoPort,
    @Inject(SETS_PLAYER_DTO) private _setsPlayerDto: SetsPlayerDtoPort,
    @Inject(GETS_ALL_PLAYER_DTO)
    private _getsAllPlayerDto: GetsAllPlayerDtoPort,
    @Inject(GETS_ONE_RPS_BOARD_DTO)
    private _getsOneRpsBoardDto: GetsOneRpsBoardDtoPort,
    @Inject(SELECTS_GAME_CONTEXT)
    private _selectsGameContext: SelectsGameContextPort,
    @Inject(PATCHES_GAME_CONTEXT)
    private _patchesGameContext: PatchesGameContextPort,
    @Inject(SETS_STATE_GAME_CONTEXT)
    private _setsStateGameContext: SetsStateGameContextPort
  ) {}

  // TODO write Test
  selectPlayersCount(command: SelectPlayersCountCommand): Observable<void> {
    return this._setsRpsBoardDto
      .set({
        maxPlayers: +command.maxPlayers,
      })
      .pipe(
        take(1),
        switchMap(() =>
          this.setActiveAllPlayers(
            new SetActiveAllPlayersCommand(command.maxPlayers)
          )
        )
      );
  }
  // TODO write Test
  setActiveAllPlayers(command: SetActiveAllPlayersCommand): Observable<void> {
    return this._getsAllPlayerDto.getAll().pipe(
      take(1),
      switchMap((players) =>
        players.map((p) => {
          this.setActivePlayer(
            new SetActivePlayersCommand(p.id, p.playerId <= command.maxPlayers)
          );
        })
      )
    );
  }
  // TODO write Test
  setActivePlayer(command: SetActivePlayersCommand): Observable<void> {
    return this._setsPlayerDto.set({
      id: command.playerId,
      isActive: command.isActive,
    });
  }
  // TODO write Test
  joinPlayer(command: JoinPlayerCommand): Observable<void> {
    return combineLatest([
      this._selectsGameContext.select(),
      this._getsOneRpsBoardDto.getOne(),
    ]).pipe(
      take(1),
      switchMap(([context, board]) =>
        this._patchesGameContext
          .patch({
            ...context,
            inGame: true,
          })
          .pipe(
            take(1),
            switchMap(() =>
              this._setsRpsBoardDto.set({
                ...board,
                players: board.players.find(
                  (player) => player.playerId === context.currentPlayer.playerId
                )
                  ? board.players
                  : [...board.players, context.currentPlayer],
              })
            )
          )
      )
    );
  }

  setUsername(command: SetUsernameCommand): Observable<void> {
    return this._selectsGameContext.select().pipe(
      take(1),
      switchMap((context) =>
        this._patchesGameContext.patch({
          currentPlayer: {
            ...context.currentPlayer,
            username: command.username,
          },
          queueStatus: false,
        })
      )
    );
  }

  takePlayer(command: TakePlayerCommand): Observable<void> {
    return this._setsStateGameContext.setState({
      currentPlayer: command.player,
      othersPlayers: [],
      queueStatus: true,
      inGame: false,
    });
  }

  initBoard(command: InitBoardCommand): Observable<void> {
    return this._getsOneRpsBoardDto.getOne().pipe(
      take(1),
      switchMap((board) =>
        this._setsRpsBoardDto.set({ ...board, players: [] })
      ),
      switchMap(() =>
        this._patchesGameContext.patch({
          currentPlayer: {} as PlayerDTO,
          othersPlayers: [],
        })
      )
    );
  }

  switchActiveStatus(command: SwitchActiveStatusCommand): Observable<void> {
    return this._selectsGameContext.select().pipe(
      take(1),
      switchMap((context) =>
        this._setsStateGameContext
          .setState({
            ...context,
            currentPlayer: {
              ...context.currentPlayer,
              isActive: !context.currentPlayer.isActive,
            },
          })
          .pipe(
            take(1),
            switchMap(() =>
              this._setsPlayerDto.set({
                id: context.currentPlayer.id,
                isActive: !context.currentPlayer.isActive,
              })
            )
          )
      )
    );
  }

  getCurrentPlayerInContextQuery(): Observable<PlayerInContextQuery> {
    return this._selectsGameContext
      .select()
      .pipe(
        map(
          (gameContext: GameContext): PlayerInContextQuery =>
            new PlayerInContextQuery(gameContext.currentPlayer)
        )
      );
  }

  setChoice(command: SetChoiceCommand): Observable<void> {
    return combineLatest([
      this._selectsGameContext.select(),
      this._getsOneRpsBoardDto.getOne(),
    ]).pipe(
      take(1),
      switchMap(([context, board]) =>
        this._patchesGameContext
          .patch({
            ...context,
            currentPlayer: {
              ...context.currentPlayer,
              choice: command.choice,
            },
          })
          .pipe(
            take(1),
            switchMap(() =>
              this._setsRpsBoardDto.set({
                ...board,
                players: board.players.map((p) =>
                  p.playerId === context.currentPlayer.playerId
                    ? { ...p, choice: command.choice }
                    : p
                ),
              })
            )
          )
      )
    );
  }

  switchReadyStatus(command: SwitchReadyStatusCommand): Observable<void> {
    return combineLatest([
      this._selectsGameContext.select(),
      this._getsOneRpsBoardDto.getOne(),
    ]).pipe(
      take(1),
      switchMap(([context, board]) =>
        this._setsRpsBoardDto
          .set({
            ...board,
            players: board.players.map((item) =>
              item.playerId === context.currentPlayer.playerId
                ? {
                    ...context.currentPlayer,
                    isReady: !item.isReady,
                    choice: context.currentPlayer.choice,
                  }
                : item
            ),
          })
          .pipe(
            take(1),
            switchMap(() =>
              this._patchesGameContext.patch({
                ...context,
                currentPlayer: {
                  ...context.currentPlayer,
                  isReady: !context.currentPlayer.isReady,
                },
              })
            )
          )
      )
    );
  }

  resetQueueStatus(command: ResetQueueStatusCommand): Observable<void> {
    return this._patchesGameContext.patch({
      queueStatus: true,
    });
  }

  getCurrentInGameQuery(): Observable<InGameQuery> {
    return this._selectsGameContext
      .select()
      .pipe(
        map(
          (gameContext: GameContext): InGameQuery =>
            new InGameQuery(gameContext.inGame)
        )
      );
  }
  getCurrentIsSelectPlayerCountVisibleQuery(): Observable<IsSelectPlayerCountVisibleQuery> {
    return this._getsOneRpsBoardDto
      .getOne()
      .pipe(
        map(
          (rpsBoardDTO: RpsBoardDTO): IsSelectPlayerCountVisibleQuery =>
            new IsSelectPlayerCountVisibleQuery(!rpsBoardDTO.players.length)
        )
      );
  }

  getAllDisplayPlayerOnBoardQuery(): Observable<DisplayPlayerOnBoardQuery[]> {
    return combineLatest([
      this._getsOneRpsBoardDto.getOne(),
      this._selectsGameContext.select(),
    ]).pipe(
      map(([board, context]) =>
        board.players.map((player) =>
          context.currentPlayer.playerId === player.playerId
            ? new DisplayPlayerOnBoardQuery(
                context.currentPlayer.username,
                { name: player.choice, isVisible: true },
                player.isReady,
                true,
                player.wantNext
              )
            : new DisplayPlayerOnBoardQuery(
                player.username,
                {
                  name: player.choice,
                  isVisible:
                    board.maxPlayers ===
                    board.players.filter((p) => p.isReady).length,
                },
                player.isReady,
                false,
                player.wantNext
              )
        )
      )
    );
  }

  getAllDisplayWinnerQuery(): Observable<DisplayWinnerQuery[]> {
    return this._getsOneRpsBoardDto
      .getOne()
      .pipe(
        map((board) =>
          board.currentWinner.map(
            (player) => new DisplayWinnerQuery(player.username)
          )
        )
      );
  }

  setCurrentWinner(command: SetCurrentWinnerCommand): Observable<void> {
    return this._getsOneRpsBoardDto.getOne().pipe(
      take(1),
      switchMap((board) => {
        return this._setsRpsBoardDto.set({
          ...board,
          currentWinner:
            board.maxPlayers ===
            board.players.filter((player) => player.isReady).length
              ? this.checkWinner(board.players)
              : [],
        });
      })
    );
  }

  getCurrentIsQueueVisibleQuery(): Observable<IsQueueVisibleQuery> {
    return this._getsOneRpsBoardDto
      .getOne()
      .pipe(
        map(
          (board): IsQueueVisibleQuery =>
            new IsQueueVisibleQuery(board.maxPlayers !== board.players.length)
        )
      );
  }

  wantNextRound(command: WantNextRoundCommand): Observable<void> {
    return combineLatest([
      this._selectsGameContext.select(),
      this._getsOneRpsBoardDto.getOne(),
    ]).pipe(
      take(1),
      switchMap(([context, board]) =>
        this._setsRpsBoardDto.set({
          ...board,
          players: board.players.map((player) =>
            player.playerId === context.currentPlayer.playerId
              ? {
                  ...context.currentPlayer,
                  wantNext: command.wantNext,
                }
              : player
          ),
        })
      )
    );
  }

  startNextRound(command: StartNextRoundCommand): Observable<void> {
    return combineLatest([
      this._selectsGameContext.select(),
      this._getsOneRpsBoardDto.getOne(),
    ]).pipe(
      take(1),
      switchMap(([context, board]) =>
        board.players.filter((p) => p.wantNext).length === board.maxPlayers
          ? this._patchesGameContext
              .patch({
                ...context,
                currentPlayer: {
                  ...context.currentPlayer,
                  choice: '',
                  isReady: false,
                  wantNext: false,
                },
              })
              .pipe(
                take(1),
                switchMap(() =>
                  this._setsRpsBoardDto.set({
                    ...board,
                    players: board.players.map((p) => ({
                      ...p,
                      choice: '',
                      isReady: false,
                      wantNext: false,
                    })),
                    currentWinner: [],
                  })
                )
              )
          : of(void 0)
      )
    );
  }

  private checkWinner(players: PlayerDTO[]): PlayerDTO[] {
    let rockChoice: PlayerDTO[] = [];
    let paperChoice: PlayerDTO[] = [];
    let scissorsChoice: PlayerDTO[] = [];

    players.forEach((player) => {
      if (player.choice === 'rock') {
        rockChoice.push(player);
      } else if (player.choice === 'paper') {
        paperChoice.push(player);
      } else if (player.choice === 'scissors') {
        scissorsChoice.push(player);
      } else {
        console.log('Error: Choice not added');
      }
    });

    if (
      rockChoice.length !== 0 &&
      paperChoice.length !== 0 &&
      scissorsChoice.length !== 0
    ) {
      return [];
    } else if (
      rockChoice.length !== 0 &&
      paperChoice.length !== 0 &&
      scissorsChoice.length === 0
    ) {
      return paperChoice;
    } else if (
      rockChoice.length !== 0 &&
      paperChoice.length === 0 &&
      scissorsChoice.length !== 0
    ) {
      return rockChoice;
    } else if (
      rockChoice.length === 0 &&
      paperChoice.length !== 0 &&
      scissorsChoice.length !== 0
    ) {
      return scissorsChoice;
    }

    return [];
  }
}
