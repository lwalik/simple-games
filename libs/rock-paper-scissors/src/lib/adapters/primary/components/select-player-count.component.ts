import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  SELECT_PLAYERS_COUNT_COMMAND,
  SelectPlayersCountCommandPort,
} from '../../../application/ports/primary/command/select-players-count.command-port';
import { SelectPlayersCountCommand } from '../../../application/ports/primary/command/select-players-count.command';
import {
  SelectsUserContextPort,
  SELECTS_USER_CONTEXT,
} from 'libs/core/src/lib/application/ports/secondary/context/selects-user.context-port';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'lib-select-player-count',
  templateUrl: './select-player-count.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectPlayerCountComponent {
  readonly form: FormGroup = new FormGroup({ maxPlayers: new FormControl() });

  isUser$: Observable<boolean> = this._selectsUserContext
    .select()
    .pipe(map((user) => (user.email.length !== 0 ? true : false)));

  constructor(
    @Inject(SELECT_PLAYERS_COUNT_COMMAND)
    private _selectPlayersCountCommand: SelectPlayersCountCommandPort,
    @Inject(SELECTS_USER_CONTEXT)
    private _selectsUserContext: SelectsUserContextPort
  ) {}

  onMaxPlayersSelected(form: FormGroup): void {
    this._selectPlayersCountCommand
      .selectPlayersCount(
        new SelectPlayersCountCommand(form.get('maxPlayers')?.value as number)
      )
      .subscribe();
  }
}
