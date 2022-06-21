import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseUsersService } from './firebase-users.service';
import { GETS_ONE_USER_DTO } from '../../../application/ports/secondary/dto/gets-one-user.dto-port';
import { GETS_ALL_USER_DTO } from '../../../application/ports/secondary/dto/gets-all-user.dto-port';
import { SETS_USER_DTO } from '../../../application/ports/secondary/dto/sets-user.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseUsersService,
    { provide: GETS_ONE_USER_DTO, useExisting: FirebaseUsersService },
    { provide: GETS_ALL_USER_DTO, useExisting: FirebaseUsersService },
    { provide: SETS_USER_DTO, useExisting: FirebaseUsersService },
  ],
  exports: [],
})
export class FirebaseUsersServiceModule {}
