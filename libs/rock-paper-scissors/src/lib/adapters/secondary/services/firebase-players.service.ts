import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GetsAllPlayerDtoPort } from '../../../application/ports/secondary/dto/gets-all-player.dto-port';
import { SetsPlayerDtoPort } from '../../../application/ports/secondary/dto/sets-player.dto-port';
import { GetsOnePlayerDtoPort } from '../../../application/ports/secondary/dto/gets-one-player.dto-port';
import { PlayerDTO } from '../../../application/ports/secondary/dto/player.dto';

@Injectable()
export class FirebasePlayersService
  implements GetsAllPlayerDtoPort, SetsPlayerDtoPort, GetsOnePlayerDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAll(): Observable<PlayerDTO[]> {
    return this._client
      .collection<PlayerDTO>('players')
      .valueChanges({ idField: 'id' });
  }

  set(player: Partial<PlayerDTO>): Observable<void> {
    return from(this._client.doc('players/' + player.id).update(player)).pipe(
      map(() => void 0)
    );
  }

  getOne(id: string): Observable<PlayerDTO> {
    return this._client
      .doc<PlayerDTO>('players/' + id)
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
