import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { PlayerDTO } from '../../../application/ports/secondary/dto/player.dto';
import { IsQueueVisibleQuery } from '../../../application/ports/primary/query/is-queue-visible.query';
import { GameContext } from '../../../application/ports/secondary/context/game.context';
import {
  GETS_ALL_PLAYER_DTO,
  GetsAllPlayerDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-player.dto-port';
import {
  TAKE_PLAYER_COMMAND,
  TakePlayerCommandPort,
} from '../../../application/ports/primary/command/take-player.command-port';
import {
  SELECTS_GAME_CONTEXT,
  SelectsGameContextPort,
} from '../../../application/ports/secondary/context/selects-game.context-port';
import {
  GETS_CURRENT_IS_QUEUE_VISIBLE_QUERY,
  GetsCurrentIsQueueVisibleQueryPort,
} from '../../../application/ports/primary/query/gets-current-is-queue-visible.query-port';
import { TakePlayerCommand } from '../../../application/ports/primary/command/take-player.command';
import { SetUsernameModalComponent } from './set-username-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'lib-queue-players',
  templateUrl: './queue-players.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueuePlayersComponent {
  players$: Observable<PlayerDTO[]> = this._getsAllPlayerDto.getAll();
  isVisible$: Observable<IsQueueVisibleQuery> =
    this._getsCurrentIsQueueVisibleQuery.getCurrentIsQueueVisibleQuery();
  gameContext$: Observable<GameContext> = this._selectsGameContext.select();

  constructor(
    @Inject(GETS_ALL_PLAYER_DTO)
    private _getsAllPlayerDto: GetsAllPlayerDtoPort,
    public dialog: MatDialog,
    @Inject(TAKE_PLAYER_COMMAND)
    private _takePlayerCommand: TakePlayerCommandPort,
    @Inject(SELECTS_GAME_CONTEXT)
    private _selectsGameContext: SelectsGameContextPort,
    @Inject(GETS_CURRENT_IS_QUEUE_VISIBLE_QUERY)
    private _getsCurrentIsQueueVisibleQuery: GetsCurrentIsQueueVisibleQueryPort
  ) {}

  onPlusButtonClicked(player: PlayerDTO): void {
    this._takePlayerCommand
      .takePlayer(new TakePlayerCommand(player))
      .pipe(take(1))
      .subscribe(() =>
        this.dialog.open(SetUsernameModalComponent, {
          width: '500px',
        })
      );
  }
}
