import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  SET_USERNAME_COMMAND,
  SetUsernameCommandPort,
} from '../../../application/ports/primary/command/set-username.command-port';
import { MatDialogRef } from '@angular/material/dialog';
import { SetUsernameCommand } from '../../../application/ports/primary/command/set-username.command';

@Component({
  selector: 'lib-set-username-modal',
  templateUrl: './set-username-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetUsernameModalComponent {
  readonly usernameForm: FormGroup = new FormGroup({
    username: new FormControl(),
  });

  constructor(
    public dialogRef: MatDialogRef<SetUsernameModalComponent>,
    @Inject(SET_USERNAME_COMMAND)
    private _setUsernameCommand: SetUsernameCommandPort
  ) {}

  onUsernameSubmitted(usernameForm: FormGroup): void {
    this._setUsernameCommand
      .setUsername(new SetUsernameCommand(usernameForm.get('username')?.value))
      .subscribe();
  }
}
