import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { DisplayPlayerOnBoardQuery } from '../../../application/ports/primary/query/display-player-on-board.query';
import {
  SWITCH_READY_STATUS_COMMAND,
  SwitchReadyStatusCommandPort,
} from '../../../application/ports/primary/command/switch-ready-status.command-port';
import {
  SET_CURRENT_WINNER_COMMAND,
  SetCurrentWinnerCommandPort,
} from '../../../application/ports/primary/command/set-current-winner.command-port';
import {
  GETS_ALL_DISPLAY_PLAYER_ON_BOARD_QUERY,
  GetsAllDisplayPlayerOnBoardQueryPort,
} from '../../../application/ports/primary/query/gets-all-display-player-on-board.query-port';
import {
  START_NEXT_ROUND_COMMAND,
  StartNextRoundCommandPort,
} from '../../../application/ports/primary/command/start-next-round.command-port';
import { PickModalComponent } from './pick-modal.component';
import { SwitchReadyStatusCommand } from '../../../application/ports/primary/command/switch-ready-status.command';
import { SetCurrentWinnerCommand } from '../../../application/ports/primary/command/set-current-winner.command';
import { WantNextRoundCommand } from '../../../application/ports/primary/command/want-next-round.command';
import { MatDialog } from '@angular/material/dialog';
import {
  WANT_NEXT_ROUND_COMMAND,
  WantNextRoundCommandPort,
} from '../../../application/ports/primary/command/want-next-round.command-port';
import { StartNextRoundCommand } from '../../../application/ports/primary/command/start-next-round.command';

@Component({
  selector: 'lib-board',
  templateUrl: './board.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  players$: Observable<DisplayPlayerOnBoardQuery[]> =
    this._getsAllDisplayPlayerResultQuery.getAllDisplayPlayerOnBoardQuery();

  constructor(
    public dialog: MatDialog,
    @Inject(SWITCH_READY_STATUS_COMMAND)
    private _switchReadyStatusCommand: SwitchReadyStatusCommandPort,
    @Inject(SET_CURRENT_WINNER_COMMAND)
    private _setCurrentWinnerCommand: SetCurrentWinnerCommandPort,
    @Inject(GETS_ALL_DISPLAY_PLAYER_ON_BOARD_QUERY)
    private _getsAllDisplayPlayerResultQuery: GetsAllDisplayPlayerOnBoardQueryPort,
    @Inject(WANT_NEXT_ROUND_COMMAND)
    private _wantNextRoundCommand: WantNextRoundCommandPort,
    @Inject(START_NEXT_ROUND_COMMAND)
    private _startNextRoundCommand: StartNextRoundCommandPort
  ) {}

  onPickButtonClicked(): void {
    this.dialog.open(PickModalComponent, {
      width: '500px',
    });
  }

  onReadyButtonClicked(): void {
    this._switchReadyStatusCommand
      .switchReadyStatus(new SwitchReadyStatusCommand())
      .subscribe(() =>
        this._setCurrentWinnerCommand
          .setCurrentWinner(new SetCurrentWinnerCommand())
          .subscribe()
      );
  }

  onNextButtonClicked(): void {
    this._wantNextRoundCommand
      .wantNextRound(new WantNextRoundCommand(true))
      .subscribe(() =>
        this._startNextRoundCommand
          .startNextRound(new StartNextRoundCommand())
          .subscribe()
      );
  }

  onCancelButtonClicked(): void {
    this._wantNextRoundCommand
      .wantNextRound(new WantNextRoundCommand(false))
      .subscribe();
  }
}
