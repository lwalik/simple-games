import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseRpsBoardService } from './firebase-rps-board.service';
import { SETS_RPS_BOARD_DTO } from '../../../application/ports/secondary/dto/sets-rps-board.dto-port';
import { GETS_ONE_RPS_BOARD_DTO } from '../../../application/ports/secondary/dto/gets-one-rps-board.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseRpsBoardService,
    { provide: SETS_RPS_BOARD_DTO, useExisting: FirebaseRpsBoardService },
    { provide: GETS_ONE_RPS_BOARD_DTO, useExisting: FirebaseRpsBoardService },
  ],
  exports: [],
})
export class FirebaseRpsBoardServiceModule {}
