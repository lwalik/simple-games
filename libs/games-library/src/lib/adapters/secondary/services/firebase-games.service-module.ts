import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseGamesService } from './firebase-games.service';
import { GETS_ALL_GAME_DTO } from '../../../application/ports/secondary/dto/gets-all-game.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseGamesService,
    { provide: GETS_ALL_GAME_DTO, useExisting: FirebaseGamesService },
  ],
  exports: [],
})
export class FirebaseGamesServiceModule {}
