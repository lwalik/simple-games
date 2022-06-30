import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { IsSelectPlayerCountVisibleQuery } from './is-select-player-count-visible.query';

export const GETS_CURRENT_IS_SELECT_PLAYER_COUNT_VISIBLE_QUERY =
  new InjectionToken<GetsCurrentIsSelectPlayerCountVisibleQueryPort>(
    'GETS_CURRENT_IS_SELECT_PLAYER_COUNT_VISIBLE_QUERY'
  );

export interface GetsCurrentIsSelectPlayerCountVisibleQueryPort {
  getCurrentIsSelectPlayerCountVisibleQuery(): Observable<IsSelectPlayerCountVisibleQuery>;
}
