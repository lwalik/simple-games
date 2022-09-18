import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lib-game-over',
  styleUrls: ['./game-over.component.scss'],
  templateUrl: './game-over.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameOverComponent {
  @Output() goHome: EventEmitter<boolean> = new EventEmitter();
  @Output() newGame: EventEmitter<boolean> = new EventEmitter();

  onGoHomeBtnClicked(): void {
    this.goHome.emit(true);
  }

  onNewGameBtnClicked(): void {
    this.newGame.emit(true);
  }
}
