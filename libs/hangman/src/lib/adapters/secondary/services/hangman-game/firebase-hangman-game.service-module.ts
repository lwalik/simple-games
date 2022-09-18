import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseHangmanGameService } from './firebase-hangman-game.service';
import { GETS_ONE_HANGMAN_GAME_DTO } from '../../../../application/ports/secondary/dto/gets-one-hangman-game.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseHangmanGameService,
    {
      provide: GETS_ONE_HANGMAN_GAME_DTO,
      useExisting: FirebaseHangmanGameService,
    },
  ],
  exports: [],
})
export class FirebaseHangmanGameServiceModule {}
