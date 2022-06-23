import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { RpsBoardDTO } from '../../../application/ports/secondary/dto/rps-board.dto';
import {
  GETS_ONE_RPS_BOARD_DTO,
  GetsOneRpsBoardDtoPort,
} from '../../../application/ports/secondary/dto/gets-one-rps-board.dto-port';
import { PlayerDTO } from '../../../application/ports/secondary/dto/player.dto';

@Component({
  selector: 'lib-board',
  templateUrl: './board.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  players$: Observable<PlayerDTO[]> = this._getsOneRpsBoardDto
    .getOne()
    .pipe(switchMap((board) => of(board.players)));

  constructor(
    @Inject(GETS_ONE_RPS_BOARD_DTO)
    private _getsOneRpsBoardDto: GetsOneRpsBoardDtoPort
  ) {}
}
