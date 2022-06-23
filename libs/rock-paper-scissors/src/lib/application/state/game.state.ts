import { Inject, Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { SelectPlayersCountCommandPort } from '../ports/primary/command/select-players-count.command-port';
import { GetsAllDisplayPlayersQueryPort } from '../ports/primary/query/gets-all-display-players.query-port';
import { SetActivePlayerCommandPort } from '../ports/primary/command/set-active-player.command-port';
import { SetActiveAllPlayersCommandPort } from '../ports/primary/command/set-active-all-players.command-port';
import { JoinPlayerCommandPort } from '../ports/primary/command/join-player.command-port';
import { SetUsernameCommandPort } from '../ports/primary/command/set-username.command-port';
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
import { SelectPlayersCountCommand } from '../ports/primary/command/select-players-count.command';
import { SetActiveAllPlayersCommand } from '../ports/primary/command/set-active-all-players.command';
import { JoinPlayerCommand } from '../ports/primary/command/join-player.command';
import { SetUsernameCommand } from '../ports/primary/command/set-username.command';
import { SetActivePlayersCommand } from '../ports/primary/command/set-active-player.command';
import {
  PatchesUserContextPort,
  PATCHES_USER_CONTEXT,
} from 'libs/core/src/lib/application/ports/secondary/context/patches-user.context-port';
import {
  SelectsUserContextPort,
  SELECTS_USER_CONTEXT,
} from 'libs/core/src/lib/application/ports/secondary/context/selects-user.context-port';
import { PlayerDTO } from '../ports/secondary/dto/player.dto';
import { UserContext } from 'libs/core/src/lib/application/ports/secondary/context/user.context';

@Injectable()
export class GameState
  implements
    SelectPlayersCountCommandPort,
    GetsAllDisplayPlayersQueryPort,
    SetActivePlayerCommandPort,
    SetActiveAllPlayersCommandPort,
    JoinPlayerCommandPort,
    SetUsernameCommandPort
{
  constructor(
    @Inject(SETS_RPS_BOARD_DTO) private _setsRpsBoardDto: SetsRpsBoardDtoPort,
    @Inject(SETS_PLAYER_DTO) private _setsPlayerDto: SetsPlayerDtoPort,
    @Inject(GETS_ALL_PLAYER_DTO)
    private _getsAllPlayerDto: GetsAllPlayerDtoPort,
    @Inject(GETS_ONE_RPS_BOARD_DTO)
    private _getsOneRpsBoardDto: GetsOneRpsBoardDtoPort,
    @Inject(PATCHES_USER_CONTEXT)
    private _patchesUserContext: PatchesUserContextPort,
    @Inject(SELECTS_USER_CONTEXT)
    private _selectsUserContext: SelectsUserContextPort
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

  getAllDisplayPlayersQuery(): Observable<void> {
    return of(void 0);
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
    return this._getsOneRpsBoardDto.getOne().pipe(
      switchMap((board) =>
        this._setsRpsBoardDto.set({
          ...board,
          players: [...board.players, command.player],
        })
      )
    );
  }

  setUsername(command: SetUsernameCommand): Observable<void> {
    return combineLatest([
      this._getsAllPlayerDto.getAll(),
      this._selectsUserContext.select(),
    ]).pipe(
      take(1),
      switchMap(([players, context]) =>
        players.filter((item) => item.id === context.playerId)
      ),
      switchMap((player) =>
        this._setsPlayerDto.set({
          id: player.id,
          username: command.username,
        })
      )
    );
  }
}
