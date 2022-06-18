import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsPlayerDtoPort } from '../../../application/ports/secondary/dto/adds-player.dto-port';
import { PlayerDTO } from '../../../application/ports/secondary/dto/player.dto';

@Injectable()
export class FirebasePlayersService implements AddsPlayerDtoPort {
  constructor(private _client: AngularFirestore) {}

  add(player: Partial<PlayerDTO>): Observable<void> {
    return from(this._client.collection('players').add(player)).pipe(
      map(() => void 0)
    );
  }
}
