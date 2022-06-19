import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { GameDTO } from '../../../application/ports/secondary/dto/game.dto';
import {
  GETS_ALL_GAME_DTO,
  GetsAllGameDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-game.dto-port';

@Component({
  selector: 'lib-games-list',
  templateUrl: './games-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesListComponent {
  games$: Observable<GameDTO[]> = this._getsAllGameDto.getAll();

  constructor(
    @Inject(GETS_ALL_GAME_DTO) private _getsAllGameDto: GetsAllGameDtoPort
  ) {}
}
