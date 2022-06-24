import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PlayerDTO } from '../../../application/ports/secondary/dto/player.dto';
import { GameContext } from '../../../application/ports/secondary/context/game.context';
import {
  GETS_ONE_RPS_BOARD_DTO,
  GetsOneRpsBoardDtoPort,
} from '../../../application/ports/secondary/dto/gets-one-rps-board.dto-port';
import {
  SELECTS_GAME_CONTEXT,
  SelectsGameContextPort,
} from '../../../application/ports/secondary/context/selects-game.context-port';
import {
  SELECTS_USER_CONTEXT,
  SelectsUserContextPort,
} from 'libs/core/src/lib/application/ports/secondary/context/selects-user.context-port';

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
  context$: Observable<GameContext> = this._selectsGameContext.select();

  constructor(
    @Inject(GETS_ONE_RPS_BOARD_DTO)
    private _getsOneRpsBoardDto: GetsOneRpsBoardDtoPort,
    @Inject(SELECTS_USER_CONTEXT)
    private _selectsUserContext: SelectsUserContextPort,
    @Inject(SELECTS_GAME_CONTEXT)
    private _selectsGameContext: SelectsGameContextPort
  ) {}
}
