import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebasePlayersService } from './firebase-players.service';
import { ADDS_PLAYER_DTO } from '../../../application/ports/secondary/dto/adds-player.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebasePlayersService,
    { provide: ADDS_PLAYER_DTO, useExisting: FirebasePlayersService },
  ],
  exports: [],
})
export class FirebasePlayersServiceModule {}
