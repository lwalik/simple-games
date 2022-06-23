import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import {
  PatchesUserContextPort,
  PATCHES_USER_CONTEXT,
} from 'libs/core/src/lib/application/ports/secondary/context/patches-user.context-port';
import {
  SelectsUserContextPort,
  SELECTS_USER_CONTEXT,
} from 'libs/core/src/lib/application/ports/secondary/context/selects-user.context-port';
import { UserContext } from 'libs/core/src/lib/application/ports/secondary/context/user.context';
import { map, Observable, switchMap, take } from 'rxjs';
import {
  GetsAllPlayerDtoPort,
  GETS_ALL_PLAYER_DTO,
} from '../../../application/ports/secondary/dto/gets-all-player.dto-port';
import { PlayerDTO } from '../../../application/ports/secondary/dto/player.dto';
import {
  SetsPlayerDtoPort,
  SETS_PLAYER_DTO,
} from '../../../application/ports/secondary/dto/sets-player.dto-port';
import { SetUsernameModalComponent } from './set-username-modal.component';

@Component({
  selector: 'lib-queue-players',
  templateUrl: './queue-players.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueuePlayersComponent {
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
    private _patchesUserContext: PatchesUserContextPort,
    private _auth: AngularFireAuth
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
