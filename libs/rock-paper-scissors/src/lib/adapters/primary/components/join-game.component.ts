import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerDTO } from '../../../application/ports/secondary/dto/player.dto';
import {
  ADDS_PLAYER_DTO,
  AddsPlayerDtoPort,
} from '../../../application/ports/secondary/dto/adds-player.dto-port';
import {
  GETS_ALL_PLAYER_DTO,
  GetsAllPlayerDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-player.dto-port';
import {
  SETS_PLAYER_DTO,
  SetsPlayerDtoPort,
} from '../../../application/ports/secondary/dto/sets-player.dto-port';
import {
  SETS_STATE_USER_CONTEXT,
  SetsStateUserContextPort,
} from 'libs/core/src/lib/application/ports/secondary/context/sets-state-user.context-port';
import {
  SELECTS_USER_CONTEXT,
  SelectsUserContextPort,
} from 'libs/core/src/lib/application/ports/secondary/context/selects-user.context-port';
import { UserContext } from 'libs/core/src/lib/application/ports/secondary/context/user.context';

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
    @Inject(ADDS_PLAYER_DTO) private _addsPlayerDto: AddsPlayerDtoPort,
    @Inject(GETS_ALL_PLAYER_DTO)
    private _getsAllPlayerDto: GetsAllPlayerDtoPort,
    @Inject(SETS_PLAYER_DTO) private _setsPlayerDto: SetsPlayerDtoPort,
    @Inject(SETS_STATE_USER_CONTEXT)
    private _setsStateUserContext: SetsStateUserContextPort,
    @Inject(SELECTS_USER_CONTEXT)
    private _selectsUserContext: SelectsUserContextPort
  ) {}

  onJoinButtonClicked(player: PlayerDTO, context: Partial<UserContext>): void {
    this._setsPlayerDto
      .set({
        id: player.id,
        isActive: !player.isActive,
        username: context.email,
      })
      .subscribe();
  }
}
