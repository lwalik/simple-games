import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerDTO } from '../../../application/ports/secondary/dto/player.dto';
import {
  GETS_ALL_PLAYER_DTO,
  GetsAllPlayerDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-player.dto-port';
import {
  TAKE_PLAYER_COMMAND,
  TakePlayerCommandPort,
} from '../../../application/ports/primary/command/take-player.command-port';
import { SetUsernameModalComponent } from './set-username-modal.component';
import { UserContext } from 'libs/core/src/lib/application/ports/secondary/context/user.context';
import {
  SELECTS_USER_CONTEXT,
  SelectsUserContextPort,
} from 'libs/core/src/lib/application/ports/secondary/context/selects-user.context-port';
import { MatDialog } from '@angular/material/dialog';
import { TakePlayerCommand } from '../../../application/ports/primary/command/take-player.command';

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
    @Inject(SELECTS_USER_CONTEXT)
    private _selectsUserContext: SelectsUserContextPort,
    public dialog: MatDialog,
    @Inject(TAKE_PLAYER_COMMAND)
    private _takePlayerCommand: TakePlayerCommandPort
  ) {}

  onPlusButtonClicked(player: PlayerDTO): void {
    this._takePlayerCommand
      .takePlayer(new TakePlayerCommand(player))
      .subscribe(() =>
        this.dialog.open(SetUsernameModalComponent, {
          width: '500px',
        })
      );
  }
}
