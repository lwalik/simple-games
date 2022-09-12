import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hangman-game-board-page',
  templateUrl: './hangman-game-board.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HangmanGameBoardPage {
  constructor(private _router: Router) {}

  homeRedirect(): void {
    this._router.navigateByUrl('/');
  }

  newGameRedirect(): void {
    this._router.navigateByUrl(this._router.url.replace(/board$/, 'start'));
  }
}
