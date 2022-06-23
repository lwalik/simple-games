import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SetsRpsBoardDtoPort } from '../../../application/ports/secondary/dto/sets-rps-board.dto-port';
import { GetsOneRpsBoardDtoPort } from '../../../application/ports/secondary/dto/gets-one-rps-board.dto-port';
import { RpsBoardDTO } from '../../../application/ports/secondary/dto/rps-board.dto';

const ID = 'FIoJNjgxAxSjm3lYKTf0';

@Injectable()
export class FirebaseRpsBoardService
  implements SetsRpsBoardDtoPort, GetsOneRpsBoardDtoPort
{
  constructor(private _client: AngularFirestore) {}

  set(rpsBoard: Partial<RpsBoardDTO>): Observable<void> {
    return from(this._client.doc('rps-board/' + ID).update(rpsBoard)).pipe(
      map(() => void 0)
    );
  }

  getOne(): Observable<RpsBoardDTO> {
    return this._client
      .doc<RpsBoardDTO>('rps-board/' + ID)
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
