import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { GETS_ALL_NAV_LINK_DTO } from '../../../application/ports/secondary/dto/gets-all-nav-link.dto-port';
import { InMemoryNavigationService } from './in-memory-navigation.service';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    InMemoryNavigationService,
    { provide: GETS_ALL_NAV_LINK_DTO, useExisting: InMemoryNavigationService },
  ],
  exports: [],
})
export class InMemoryNavigationServiceModule {}
