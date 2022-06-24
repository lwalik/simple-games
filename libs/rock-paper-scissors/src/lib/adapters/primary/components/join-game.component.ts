import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerInContextQuery } from '../../../application/ports/primary/query/player-in-context.query';
import {
  JOIN_PLAYER_COMMAND,
  JoinPlayerCommandPort,
} from '../../../application/ports/primary/command/join-player.command-port';
import {
  GETS_CURRENT_PLAYER_IN_CONTEXT_QUERY,
  GetsCurrentPlayerInContextQueryPort,
} from '../../../application/ports/primary/query/gets-current-player-in-context.query-port';
import { JoinPlayerCommand } from '../../../application/ports/primary/command/join-player.command';

@Component({
  selector: 'lib-join-game',
  templateUrl: './join-game.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinGameComponent {
  player$: Observable<PlayerInContextQuery> =
    this._getsCurrentPlayerInContextQuery.getCurrentPlayerInContextQuery();

  constructor(
    @Inject(JOIN_PLAYER_COMMAND)
    private _joinPlayerCommand: JoinPlayerCommandPort,
    @Inject(GETS_CURRENT_PLAYER_IN_CONTEXT_QUERY)
    private _getsCurrentPlayerInContextQuery: GetsCurrentPlayerInContextQueryPort
  ) {}

  onJoinButtonClicked(): void {
    this._joinPlayerCommand.joinPlayer(new JoinPlayerCommand()).subscribe();
  }
}
