import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetsAllNavLinkDtoPort } from '../../../application/ports/secondary/dto/gets-all-nav-link.dto-port';
import { NavLinkDTO } from '../../../application/ports/secondary/dto/nav-link.dto';

@Injectable()
export class InMemoryNavigationService implements GetsAllNavLinkDtoPort {
  constructor() {}

  getAll(): Observable<NavLinkDTO[]> {
    return of([
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'Games',
        url: 'games',
      },
    ]);
  }
}
