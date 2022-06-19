import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllGameDtoPort } from '../../../application/ports/secondary/dto/gets-all-game.dto-port';
import { GameDTO } from '../../../application/ports/secondary/dto/game.dto';

@Injectable()
export class FirebaseGamesService implements GetsAllGameDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(): Observable<GameDTO[]> {
    return this._client
      .collection<GameDTO>('games')
      .valueChanges({ idField: 'id' });
  }
}
