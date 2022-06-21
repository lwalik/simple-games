import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebasePlayersService } from './firebase-players.service';
import { ADDS_PLAYER_DTO } from '../../../application/ports/secondary/dto/adds-player.dto-port';
import { GETS_ALL_PLAYER_DTO } from '../../../application/ports/secondary/dto/gets-all-player.dto-port';
import { SETS_PLAYER_DTO } from '../../../application/ports/secondary/dto/sets-player.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebasePlayersService,
    { provide: ADDS_PLAYER_DTO, useExisting: FirebasePlayersService },
    { provide: GETS_ALL_PLAYER_DTO, useExisting: FirebasePlayersService },
    { provide: SETS_PLAYER_DTO, useExisting: FirebasePlayersService },
  ],
  exports: [],
})
export class FirebasePlayersServiceModule {}
