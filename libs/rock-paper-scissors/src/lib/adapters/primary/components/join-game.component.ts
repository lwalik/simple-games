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

@Component({
  selector: 'lib-join-game',
  templateUrl: './join-game.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinGameComponent {
  players$: Observable<PlayerDTO[]> = this._getsAllPlayerDto.getAll();

  constructor(
    @Inject(ADDS_PLAYER_DTO) private _addsPlayerDto: AddsPlayerDtoPort,
    @Inject(GETS_ALL_PLAYER_DTO) private _getsAllPlayerDto: GetsAllPlayerDtoPort
  ) {}
}
