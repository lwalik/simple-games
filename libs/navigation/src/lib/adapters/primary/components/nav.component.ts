import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, of, switchMap, take } from 'rxjs';
import { NavLinkDTO } from '../../../application/ports/secondary/dto/nav-link.dto';
import {
  GETS_ALL_NAV_LINK_DTO,
  GetsAllNavLinkDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-nav-link.dto-port';
import {
  SETS_STATE_USER_CONTEXT,
  SetsStateUserContextPort,
} from 'libs/core/src/lib/application/ports/secondary/context/sets-state-user.context-port';
import {
  SELECTS_USER_CONTEXT,
  SelectsUserContextPort,
} from 'libs/core/src/lib/application/ports/secondary/context/selects-user.context-port';
import { UserContext } from 'libs/core/src/lib/application/ports/secondary/context/user.context';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'lib-nav',
  templateUrl: './nav.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  navLinks$: Observable<NavLinkDTO[]> = this._getsAllNavLinkDto.getAll();
  context$: Observable<boolean> = this._selectsUserContext
    .select()
    .pipe(
      switchMap((user) =>
        user.email && user.email.length ? of(true) : of(false)
      )
    );

  constructor(
    @Inject(GETS_ALL_NAV_LINK_DTO)
    private _getsAllNavLinkDto: GetsAllNavLinkDtoPort,
    @Inject(SETS_STATE_USER_CONTEXT)
    private _setsStateUserContext: SetsStateUserContextPort,
    @Inject(SELECTS_USER_CONTEXT)
    private _selectsUserContext: SelectsUserContextPort,
    private _auth: AngularFireAuth
  ) {}

  onLogOutButtonClicked(): void {
    this._setsStateUserContext
      .setState({
        email: '',
      })
      .pipe(take(1))
      .subscribe(() => this._auth.signOut());
  }
}
