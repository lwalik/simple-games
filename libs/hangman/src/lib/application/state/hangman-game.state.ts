import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetsAllLettersQueryPort } from '../ports/primary/query/gets-all-letters.query-port';
import { LettersQuery } from '../ports/primary/query/letters.query';

@Injectable()
export class HangmanGameState implements GetsAllLettersQueryPort {
  getAllLettersQuery(): Observable<LettersQuery[]> {
    return of([
      { letter: 'Q' },
      { letter: 'W' },
      { letter: 'E' },
      { letter: 'R' },
      { letter: 'T' },
      { letter: 'Y' },
      { letter: 'U' },
      { letter: 'I' },
      { letter: 'O' },
      { letter: 'P' },
      { letter: 'A' },
      { letter: 'S' },
      { letter: 'D' },
      { letter: 'F' },
      { letter: 'G' },
      { letter: 'H' },
      { letter: 'J' },
      { letter: 'K' },
      { letter: 'L' },
      { letter: 'Z' },
      { letter: 'X' },
      { letter: 'C' },
      { letter: 'V' },
      { letter: 'B' },
      { letter: 'N' },
      { letter: 'M' },
    ]);
  }
}
