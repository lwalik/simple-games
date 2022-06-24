import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { IsPlayerInContextQuery } from '../../../application/ports/primary/query/is-player-in-context.query';
import {
  JOIN_PLAYER_COMMAND,
  JoinPlayerCommandPort,
} from '../../../application/ports/primary/command/join-player.command-port';
import {
  GETS_CURRENT_IS_PLAYER_IN_CONTEXT_QUERY,
  GetsCurrentIsPlayerInContextQueryPort,
} from '../../../application/ports/primary/query/gets-current-is-player-in-context.query-port';
import { JoinPlayerCommand } from '../../../application/ports/primary/command/join-player.command';

@Component({
  selector: 'lib-join-game',
  templateUrl: './join-game.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinGameComponent {
  isPlayer$: Observable<IsPlayerInContextQuery> =
    this._getsCurrentIsPlayerInContextQuery.getCurrentIsPlayerInContextQuery();

  constructor(
    @Inject(JOIN_PLAYER_COMMAND)
    private _joinPlayerCommand: JoinPlayerCommandPort,
    @Inject(GETS_CURRENT_IS_PLAYER_IN_CONTEXT_QUERY)
    private _getsCurrentIsPlayerInContextQuery: GetsCurrentIsPlayerInContextQueryPort
  ) {}

  onJoinButtonClicked(): void {
    this._joinPlayerCommand.joinPlayer(new JoinPlayerCommand()).subscribe();
  }
}
