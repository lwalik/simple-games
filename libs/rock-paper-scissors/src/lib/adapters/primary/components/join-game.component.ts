import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, take } from 'rxjs';
import { PlayerDTO } from '../../../application/ports/secondary/dto/player.dto';
import { RpsBoardDTO } from '../../../application/ports/secondary/dto/rps-board.dto';
import {
  GETS_ALL_PLAYER_DTO,
  GetsAllPlayerDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-player.dto-port';
import {
  SETS_PLAYER_DTO,
  SetsPlayerDtoPort,
} from '../../../application/ports/secondary/dto/sets-player.dto-port';

import { UserContext } from 'libs/core/src/lib/application/ports/secondary/context/user.context';
import {
  SELECTS_USER_CONTEXT,
  SelectsUserContextPort,
} from 'libs/core/src/lib/application/ports/secondary/context/selects-user.context-port';
import { MatDialog } from '@angular/material/dialog';
import { SetUsernameModalComponent } from './set-username-modal.component';
import {
  PatchesUserContextPort,
  PATCHES_USER_CONTEXT,
} from 'libs/core/src/lib/application/ports/secondary/context/patches-user.context-port';

@Component({
  selector: 'lib-join-game',
  templateUrl: './join-game.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinGameComponent {
  players$: Observable<PlayerDTO[]> = this._getsAllPlayerDto.getAll();

  context$: Observable<Partial<UserContext>> =
    this._selectsUserContext.select();

  constructor(
    @Inject(GETS_ALL_PLAYER_DTO)
    private _getsAllPlayerDto: GetsAllPlayerDtoPort,
    @Inject(SETS_PLAYER_DTO) private _setsPlayerDto: SetsPlayerDtoPort,
    @Inject(SELECTS_USER_CONTEXT)
    private _selectsUserContext: SelectsUserContextPort,
    public dialog: MatDialog,
    @Inject(PATCHES_USER_CONTEXT)
    private _patchesUserContext: PatchesUserContextPort
  ) {}

  onJoinButtonClicked(player: PlayerDTO): void {
    this._patchesUserContext
      .patch({ playerId: player.id })
      .pipe(take(1))
      .subscribe(() =>
        this.dialog.open(SetUsernameModalComponent, {
          width: '500px',
        })
      );
  }
}
