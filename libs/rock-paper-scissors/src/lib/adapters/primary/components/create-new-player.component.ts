import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ADDS_PLAYER_DTO,
  AddsPlayerDtoPort,
} from '../../../application/ports/secondary/dto/adds-player.dto-port';

@Component({
  selector: 'lib-create-new-player',
  templateUrl: './create-new-player.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateNewPlayerComponent {
  readonly newPlayer: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    @Inject(ADDS_PLAYER_DTO) private _addsPlayerDto: AddsPlayerDtoPort
  ) {}

  onNewPlayerSubmitted(newPlayer: FormGroup): void {
    this._addsPlayerDto
      .add({
        username: newPlayer.get('username')?.value,
        password: newPlayer.get('password')?.value,
      })
      .subscribe();
  }
}
