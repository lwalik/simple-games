import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebasePlayersService } from './firebase-players.service';
import { GETS_ALL_PLAYER_DTO } from '../../../application/ports/secondary/dto/gets-all-player.dto-port';
import { SETS_PLAYER_DTO } from '../../../application/ports/secondary/dto/sets-player.dto-port';
import { GETS_ONE_RPS_BOARD_DTO } from '../../../application/ports/secondary/dto/gets-one-rps-board.dto-port';
import { GETS_ONE_PLAYER_DTO } from '../../../application/ports/secondary/dto/gets-one-player.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebasePlayersService,
    { provide: GETS_ALL_PLAYER_DTO, useExisting: FirebasePlayersService },
    { provide: SETS_PLAYER_DTO, useExisting: FirebasePlayersService },
    { provide: GETS_ONE_RPS_BOARD_DTO, useExisting: FirebasePlayersService },
    { provide: GETS_ONE_PLAYER_DTO, useExisting: FirebasePlayersService },
  ],
  exports: [],
})
export class FirebasePlayersServiceModule {}
