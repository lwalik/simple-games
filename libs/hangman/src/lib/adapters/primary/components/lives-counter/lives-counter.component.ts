import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { LivesQuery } from '../../../../application/ports/primary/query/lives.query';
import {
  GETS_ALL_LIVES_QUERY,
  GetsAllLivesQueryPort,
} from '../../../../application/ports/primary/query/gets-all-lives.query-port';

@Component({
  selector: 'lib-lives-counter',
  templateUrl: './lives-counter.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LivesCounterComponent {
  lives$: Observable<LivesQuery> = this._getsAllLivesQuery.getAllLivesQuery();

  constructor(
    @Inject(GETS_ALL_LIVES_QUERY)
    private _getsAllLivesQuery: GetsAllLivesQueryPort
  ) {}
}
