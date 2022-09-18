import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetsOneHangmanGameDtoPort } from '../../../../application/ports/secondary/dto/gets-one-hangman-game.dto-port';
import { HangmanGameDTO } from '../../../../application/ports/secondary/dto/hangman-game.dto';

const ID = 'bkkaFsdU2pNKX2URV9V1';

@Injectable()
export class FirebaseHangmanGameService implements GetsOneHangmanGameDtoPort {
  constructor(private _client: AngularFirestore) {}

  getOne(): Observable<HangmanGameDTO> {
    return this._client
      .doc<HangmanGameDTO>('hangman-game/' + ID)
      .valueChanges({ idField: 'id' })
      .pipe(
        switchMap((item) =>
          item
            ? of(item)
            : throwError(new Error('Item does not exist in firebase'))
        )
      );
  }
}
