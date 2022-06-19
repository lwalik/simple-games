import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { NavLinkDTO } from '../../../application/ports/secondary/dto/nav-link.dto';
import {
  GETS_ALL_NAV_LINK_DTO,
  GetsAllNavLinkDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-nav-link.dto-port';

@Component({
  selector: 'lib-nav',
  templateUrl: './nav.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  navLinks$: Observable<NavLinkDTO[]> = this._getsAllNavLinkDto.getAll();

  constructor(
    @Inject(GETS_ALL_NAV_LINK_DTO)
    private _getsAllNavLinkDto: GetsAllNavLinkDtoPort
  ) {}
}
