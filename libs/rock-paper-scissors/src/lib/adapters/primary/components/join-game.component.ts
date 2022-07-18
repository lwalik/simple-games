import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerInContextQuery } from '../../../application/ports/primary/query/player-in-context.query';
import { InGameQuery } from '../../../application/ports/primary/query/in-game.query';
import { QueueStatusQuery } from '../../../application/ports/primary/query/queue-status.query';
import {
  JOIN_PLAYER_COMMAND,
  JoinPlayerCommandPort,
} from '../../../application/ports/primary/command/join-player.command-port';
import {
  GETS_CURRENT_PLAYER_IN_CONTEXT_QUERY,
  GetsCurrentPlayerInContextQueryPort,
} from '../../../application/ports/primary/query/gets-current-player-in-context.query-port';
import {
  GETS_CURRENT_IN_GAME_QUERY,
  GetsCurrentInGameQueryPort,
} from '../../../application/ports/primary/query/gets-current-in-game.query-port';
import {
  SWITCH_ACTIVE_STATUS_COMMAND,
  SwitchActiveStatusCommandPort,
} from '../../../application/ports/primary/command/switch-active-status.command-port';
import {
  GETS_CURRENT_QUEUE_STATUS_QUERY,
  GetsCurrentQueueStatusQueryPort,
} from '../../../application/ports/primary/query/gets-current-queue-status.query-port';
import { PlayerDTO } from '../../../application/ports/secondary/dto/player.dto';
import { JoinPlayerCommand } from '../../../application/ports/primary/command/join-player.command';
import { SwitchActiveStatusCommand } from '../../../application/ports/primary/command/switch-active-status.command';

@Component({
  selector: 'lib-join-game',
  templateUrl: './join-game.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinGameComponent {
  player$: Observable<PlayerInContextQuery> =
    this._getsCurrentPlayerInContextQuery.getCurrentPlayerInContextQuery();
  inGame$: Observable<InGameQuery> =
    this._getsCurrentInGameQuery.getCurrentInGameQuery();
  queueStatus$: Observable<QueueStatusQuery> =
    this._getsCurrentQueueStatusQuery.getCurrentQueueStatusQuery();

  constructor(
    @Inject(JOIN_PLAYER_COMMAND)
    private _joinPlayerCommand: JoinPlayerCommandPort,
    @Inject(GETS_CURRENT_PLAYER_IN_CONTEXT_QUERY)
    private _getsCurrentPlayerInContextQuery: GetsCurrentPlayerInContextQueryPort,
    @Inject(GETS_CURRENT_IN_GAME_QUERY)
    private _getsCurrentInGameQuery: GetsCurrentInGameQueryPort,
    @Inject(SWITCH_ACTIVE_STATUS_COMMAND)
    private _switchActiveStatusCommand: SwitchActiveStatusCommandPort,
    @Inject(GETS_CURRENT_QUEUE_STATUS_QUERY)
    private _getsCurrentQueueStatusQuery: GetsCurrentQueueStatusQueryPort
  ) {}

  onJoinButtonClicked(player: PlayerDTO): void {
    this._joinPlayerCommand
      .joinPlayer(new JoinPlayerCommand())
      .subscribe(() =>
        this._switchActiveStatusCommand
          .switchActiveStatus(new SwitchActiveStatusCommand())
          .subscribe()
      );
  }
}
