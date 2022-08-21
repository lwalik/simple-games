import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hangman-game-welcome-page',
  templateUrl: './hangman-game-welcome.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HangmanGameWelcomePage {
  constructor(private _router: Router) {}
}
