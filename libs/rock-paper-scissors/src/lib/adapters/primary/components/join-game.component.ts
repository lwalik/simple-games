import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerInContextQuery } from '../../../application/ports/primary/query/player-in-context.query';
import { InGameQuery } from '../../../application/ports/primary/query/in-game.query';
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
  SWITCH_PLAYER_IN_CONTEXT_STATUS_COMMAND,
  SwitchPlayerInContextStatusCommandPort,
} from '../../../application/ports/primary/command/switch-player-in-context-status.command-port';
import { PlayerDTO } from '../../../application/ports/secondary/dto/player.dto';
import { JoinPlayerCommand } from '../../../application/ports/primary/command/join-player.command';
import { SwitchPlayerInContextStatusCommand } from '../../../application/ports/primary/command/switch-player-in-context-status.command';

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

  constructor(
    @Inject(JOIN_PLAYER_COMMAND)
    private _joinPlayerCommand: JoinPlayerCommandPort,
    @Inject(GETS_CURRENT_PLAYER_IN_CONTEXT_QUERY)
    private _getsCurrentPlayerInContextQuery: GetsCurrentPlayerInContextQueryPort,
    @Inject(GETS_CURRENT_IN_GAME_QUERY)
    private _getsCurrentInGameQuery: GetsCurrentInGameQueryPort,
    @Inject(SWITCH_PLAYER_IN_CONTEXT_STATUS_COMMAND)
    private _switchPlayerInContextStatusCommand: SwitchPlayerInContextStatusCommandPort
  ) {}

  onJoinButtonClicked(player: PlayerDTO): void {
    this._joinPlayerCommand
      .joinPlayer(new JoinPlayerCommand())
      .subscribe(() =>
        this._switchPlayerInContextStatusCommand
          .switchPlayerInContextStatus(new SwitchPlayerInContextStatusCommand())
          .subscribe()
      );
  }
}
