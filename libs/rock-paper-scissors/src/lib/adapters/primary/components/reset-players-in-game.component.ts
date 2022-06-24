import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { InitBoardCommand } from '../../../application/ports/primary/command/init-board.command';
import {
  INIT_BOARD_COMMAND,
  InitBoardCommandPort,
} from '../../../application/ports/primary/command/init-board.command-port';

@Component({
  selector: 'lib-reset-players-in-game',
  templateUrl: './reset-players-in-game.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPlayersInGameComponent {
  constructor(
    @Inject(INIT_BOARD_COMMAND) private _initBoardCommand: InitBoardCommandPort
  ) {}

  onResetButtonClicked(): void {
    this._initBoardCommand.initBoard(new InitBoardCommand()).subscribe();
  }
}
