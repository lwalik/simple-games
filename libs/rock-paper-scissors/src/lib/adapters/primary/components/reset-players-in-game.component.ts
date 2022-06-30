import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import {
  INIT_BOARD_COMMAND,
  InitBoardCommandPort,
} from '../../../application/ports/primary/command/init-board.command-port';
import {
  RESET_QUEUE_STATUS_COMMAND,
  ResetQueueStatusCommandPort,
} from '../../../application/ports/primary/command/reset-queue-status.command-port';
import { InitBoardCommand } from '../../../application/ports/primary/command/init-board.command';
import { ResetQueueStatusCommand } from '../../../application/ports/primary/command/reset-queue-status.command';

@Component({
  selector: 'lib-reset-players-in-game',
  templateUrl: './reset-players-in-game.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPlayersInGameComponent {
  constructor(
    @Inject(INIT_BOARD_COMMAND) private _initBoardCommand: InitBoardCommandPort,
    @Inject(RESET_QUEUE_STATUS_COMMAND)
    private _resetQueueStatusCommand: ResetQueueStatusCommandPort
  ) {}

  onResetButtonClicked(): void {
    this._initBoardCommand
      .initBoard(new InitBoardCommand())
      .subscribe(() =>
        this._resetQueueStatusCommand
          .resetQueueStatus(new ResetQueueStatusCommand())
          .subscribe()
      );
  }
}
