import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GetsOneUserDtoPort } from '../../../application/ports/secondary/dto/gets-one-user.dto-port';
import { GetsAllUserDtoPort } from '../../../application/ports/secondary/dto/gets-all-user.dto-port';
import { SetsUserDtoPort } from '../../../application/ports/secondary/dto/sets-user.dto-port';
import { UserDTO } from '../../../application/ports/secondary/dto/user.dto';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class FirebaseUsersService
  implements GetsOneUserDtoPort, GetsAllUserDtoPort, SetsUserDtoPort
{
  constructor(
    private _client: AngularFirestore,
    private _auth: AngularFireAuth
  ) {}

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

  set(user: UserDTO): Observable<void> {
    this._auth.signInWithEmailAndPassword(user.email, user.password);
    console.log('User from firebaseUserService: ' + user);
    return of(void 0);
  }
}
