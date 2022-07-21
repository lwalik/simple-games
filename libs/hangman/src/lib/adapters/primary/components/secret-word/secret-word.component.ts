import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lib-secret-word',
  templateUrl: './secret-word.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecretWordComponent {
  readonly secretWord = [
    {
      letter: 'D',
      isVisible: true,
    },
    {
      letter: 'O',
      isVisible: false,
    },
    {
      letter: 'M',
      isVisible: true,
    },
  ];
}
