import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetsAllNavLinkDtoPort } from '../../../application/ports/secondary/dto/gets-all-nav-link.dto-port';
import { NavLinkDTO } from '../../../application/ports/secondary/dto/nav-link.dto';

@Injectable()
export class InMemoryNavigationService implements GetsAllNavLinkDtoPort {
  private _data = [
    {
      name: 'Games',
      url: 'games',
      isActive: true,
    },
    {
      name: 'Login',
      url: 'login',
      isActive: true,
    },
    {
      name: 'Logout',
      url: '/',
      isActive: true,
    },
  ];
  constructor() {}

  getAll(): Observable<NavLinkDTO[]> {
    return of([...this._data]);
  }
}
