import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  SELECT_PLAYERS_COUNT_COMMAND,
  SelectPlayersCountCommandPort,
} from '../../../application/ports/primary/command/select-players-count.command-port';
import {
  GETS_CURRENT_IS_SELECT_PLAYER_COUNT_VISIBLE_QUERY,
  GetsCurrentIsSelectPlayerCountVisibleQueryPort,
} from '../../../application/ports/primary/query/gets-current-is-select-player-count-visible.query-port';
import { SelectPlayersCountCommand } from '../../../application/ports/primary/command/select-players-count.command';

@Component({
  selector: 'lib-select-player-count',
  templateUrl: './select-player-count.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectPlayerCountComponent {
  readonly form: FormGroup = new FormGroup({ maxPlayers: new FormControl() });
  isVisible$: Observable<boolean> =
    this._getsCurrentIsSelectPlayerCountVisibleQuery
      .getCurrentIsSelectPlayerCountVisibleQuery()
      .pipe(map((data) => data.isVisible));

  constructor(
    @Inject(SELECT_PLAYERS_COUNT_COMMAND)
    private _selectPlayersCountCommand: SelectPlayersCountCommandPort,
    @Inject(GETS_CURRENT_IS_SELECT_PLAYER_COUNT_VISIBLE_QUERY)
    private _getsCurrentIsSelectPlayerCountVisibleQuery: GetsCurrentIsSelectPlayerCountVisibleQueryPort
  ) {}

  onMaxPlayersSelected(form: FormGroup): void {
    this._selectPlayersCountCommand
      .selectPlayersCount(
        new SelectPlayersCountCommand(form.get('maxPlayers')?.value as number)
      )
      .subscribe();
  }
}
