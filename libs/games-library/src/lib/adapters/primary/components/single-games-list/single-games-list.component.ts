import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { GameDTO } from '../../../../application/ports/secondary/dto/game.dto';
import {
  GETS_ALL_GAME_DTO,
  GetsAllGameDtoPort,
} from '../../../../application/ports/secondary/dto/gets-all-game.dto-port';

@Component({
  selector: 'lib-single-games-list',
  templateUrl: './single-games-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleGamesListComponent {
  games$: Observable<GameDTO[]> = this._getsAllGameDto
    .getAll()
    .pipe(map((allGames) => allGames.filter((i) => i.type === 'single')));

  constructor(
    @Inject(GETS_ALL_GAME_DTO) private _getsAllGameDto: GetsAllGameDtoPort
  ) {}
}
