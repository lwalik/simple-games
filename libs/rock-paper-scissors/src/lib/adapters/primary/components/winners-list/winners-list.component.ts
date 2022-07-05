import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { DisplayWinnerQuery } from '../../../../application/ports/primary/query/display-winner.query';
import {
  GETS_ALL_DISPLAY_WINNER_QUERY,
  GetsAllDisplayWinnerQueryPort,
} from '../../../../application/ports/primary/query/gets-all-display-winner.query-port';

@Component({
  selector: 'lib-winners-list',
  templateUrl: './winners-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WinnersListComponent {
  winners$: Observable<DisplayWinnerQuery[]> =
    this._getsAllDisplayWinnerQuery.getAllDisplayWinnerQuery();

  constructor(
    @Inject(GETS_ALL_DISPLAY_WINNER_QUERY)
    private _getsAllDisplayWinnerQuery: GetsAllDisplayWinnerQueryPort
  ) {}
}
