import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetsOneUserDtoPort } from '../../../application/ports/secondary/dto/gets-one-user.dto-port';
import { GetsAllUserDtoPort } from '../../../application/ports/secondary/dto/gets-all-user.dto-port';
import { UserDTO } from '../../../application/ports/secondary/dto/user.dto';

@Injectable()
export class FirebaseUsersService
  implements GetsOneUserDtoPort, GetsAllUserDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getOne(id: string): Observable<UserDTO> {
    return this._client
      .doc<UserDTO>('users/' + id)
      .valueChanges({ idField: 'id' })
      .pipe(
        switchMap((item) =>
          item
            ? of(item)
            : throwError(new Error('Item does not exist in firebase'))
        )
      );
  }

  getAll(): Observable<UserDTO[]> {
    return this._client
      .collection<UserDTO>('users')
      .valueChanges({ idField: 'id' });
  }
}
