import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { SelectPlayersCountCommandPort } from '../ports/primary/command/select-players-count.command-port';
import { SetActivePlayerCommandPort } from '../ports/primary/command/set-active-player.command-port';
import { SetActiveAllPlayersCommandPort } from '../ports/primary/command/set-active-all-players.command-port';
import { JoinPlayerCommandPort } from '../ports/primary/command/join-player.command-port';
import { SetUsernameCommandPort } from '../ports/primary/command/set-username.command-port';
import { TakePlayerCommandPort } from '../ports/primary/command/take-player.command-port';
import { InitBoardCommandPort } from '../ports/primary/command/init-board.command-port';
import { SwitchPlayerInContextStatusCommandPort } from '../ports/primary/command/switch-player-in-context-status.command-port';
import { GetsCurrentPlayerInContextQueryPort } from '../ports/primary/query/gets-current-player-in-context.query-port';
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
import { SwitchPlayerInContextStatusCommand } from '../ports/primary/command/switch-player-in-context-status.command';
import { SetUsernameCommand } from '../ports/primary/command/set-username.command';
import { TakePlayerCommand } from '../ports/primary/command/take-player.command';
import { InitBoardCommand } from '../ports/primary/command/init-board.command';
import { PlayerInContextQuery } from '../ports/primary/query/player-in-context.query';
import { GameContext } from '../ports/secondary/context/game.context';
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
    SwitchPlayerInContextStatusCommandPort,
    GetsCurrentPlayerInContextQueryPort
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

  selectPlayersCount(command: SelectPlayersCountCommand): Observable<void> {
    return this._setsRpsBoardDto
      .set({
        maxPlayers: command.maxPlayers,
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

  setActivePlayer(command: SetActivePlayersCommand): Observable<void> {
    return this._setsPlayerDto.set({
      id: command.playerId,
      isActive: command.isActive,
    });
  }

  joinPlayer(command: JoinPlayerCommand): Observable<void> {
    return this.switchPlayerInContextStatus(
      new SwitchPlayerInContextStatusCommand()
    ).pipe(
      switchMap(() =>
        this._selectsGameContext.select().pipe(
          take(1),
          switchMap((context) =>
            this._getsOneRpsBoardDto.getOne().pipe(
              take(1),
              switchMap((board) =>
                this._setsRpsBoardDto.set({
                  ...board,
                  players: [...board.players, context.player],
                })
              )
            )
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
          player: { ...context.player, username: command.username },
        })
      )
    );
  }

  takePlayer(command: TakePlayerCommand): Observable<void> {
    return this._setsStateGameContext.setState({
      player: command.player,
    });
  }

  initBoard(command: InitBoardCommand): Observable<void> {
    return this._getsOneRpsBoardDto.getOne().pipe(
      take(1),
      switchMap((board) => this._setsRpsBoardDto.set({ ...board, players: [] }))
    );
  }

  switchPlayerInContextStatus(
    command: SwitchPlayerInContextStatusCommand
  ): Observable<void> {
    return this._selectsGameContext.select().pipe(
      take(1),
      switchMap((context) =>
        this._setsStateGameContext
          .setState({
            ...context,
            player: { ...context.player, isActive: !context.player.isActive },
          })
          .pipe(
            take(1),
            switchMap(() =>
              this._setsPlayerDto.set({
                id: context.player.id,
                isActive: !context.player.isActive,
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
            new PlayerInContextQuery(
              gameContext.player.username,
              gameContext.player.isActive
            )
        )
      );
  }
}
