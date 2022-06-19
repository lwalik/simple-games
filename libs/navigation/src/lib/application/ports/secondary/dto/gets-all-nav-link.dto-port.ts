import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { NavLinkDTO } from './nav-link.dto';

export const GETS_ALL_NAV_LINK_DTO = new InjectionToken<GetsAllNavLinkDtoPort>('GETS_ALL_NAV_LINK_DTO');

export interface GetsAllNavLinkDtoPort {
  getAll(): Observable<NavLinkDTO[]>;
}
