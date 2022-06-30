import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { GameContext } from '../../../application/ports/secondary/context/game.context';
import { DisplayBoardQuery } from '../../../application/ports/primary/query/display-board.query';
import {
  SELECTS_GAME_CONTEXT,
  SelectsGameContextPort,
} from '../../../application/ports/secondary/context/selects-game.context-port';
import {
  SWITCH_READY_STATUS_COMMAND,
  SwitchReadyStatusCommandPort,
} from '../../../application/ports/primary/command/switch-ready-status.command-port';
import {
  GETS_CURRENT_DISPLAY_BOARD_QUERY,
  GetsCurrentDisplayBoardQueryPort,
} from '../../../application/ports/primary/query/gets-current-display-board.query-port';
import { PickModalComponent } from './pick-modal.component';
import { SwitchReadyStatusCommand } from '../../../application/ports/primary/command/switch-ready-status.command';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'lib-board',
  templateUrl: './board.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  context$: Observable<GameContext> = this._selectsGameContext.select();
  players$: Observable<DisplayBoardQuery> =
    this._getsCurrentDisplayBoardQuery.getCurrentDisplayBoardQuery();

  constructor(
    @Inject(SELECTS_GAME_CONTEXT)
    private _selectsGameContext: SelectsGameContextPort,
    public dialog: MatDialog,
    @Inject(SWITCH_READY_STATUS_COMMAND)
    private _switchReadyStatusCommand: SwitchReadyStatusCommandPort,
    @Inject(GETS_CURRENT_DISPLAY_BOARD_QUERY)
    private _getsCurrentDisplayBoardQuery: GetsCurrentDisplayBoardQueryPort
  ) {}

  onPickButtonClicked(): void {
    this.dialog.open(PickModalComponent, {
      width: '500px',
    });
  }

  onReadyButtonClicked(): void {
    this._switchReadyStatusCommand
      .switchReadyStatus(new SwitchReadyStatusCommand())
      .subscribe();
  }
}
