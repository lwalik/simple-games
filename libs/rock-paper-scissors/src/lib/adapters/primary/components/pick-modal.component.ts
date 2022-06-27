import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  SET_CHOICE_COMMAND,
  SetChoiceCommandPort,
} from '../../../application/ports/primary/command/set-choice.command-port';
import { MatDialogRef } from '@angular/material/dialog';
import { SetChoiceCommand } from '../../../application/ports/primary/command/set-choice.command';

@Component({
  selector: 'lib-pick-modal',
  templateUrl: './pick-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PickModalComponent {
  constructor(
    public dialogRef: MatDialogRef<PickModalComponent>,
    @Inject(SET_CHOICE_COMMAND) private _setChoiceCommand: SetChoiceCommandPort
  ) {}

  onChoiceButtonClicked(choice: string): void {
    this._setChoiceCommand
      .setChoice(new SetChoiceCommand(choice))
      .subscribe(() => this.dialogRef.close(''));
  }
}
