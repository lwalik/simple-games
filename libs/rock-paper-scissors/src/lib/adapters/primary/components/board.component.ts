import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { PlayerDTO } from '../../../application/ports/secondary/dto/player.dto';
import {
  GETS_ALL_PLAYER_DTO,
  GetsAllPlayerDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-player.dto-port';

@Component({
  selector: 'lib-board',
  templateUrl: './board.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  players$: Observable<PlayerDTO[]> = this._getsAllPlayerDto
    .getAll()
    .pipe(map((players) => players.filter((player) => !player.isActive)));

  constructor(
    @Inject(GETS_ALL_PLAYER_DTO) private _getsAllPlayerDto: GetsAllPlayerDtoPort
  ) {}
}
