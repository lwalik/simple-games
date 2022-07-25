export interface LettersContext {
  readonly letters: Letter[];
}

interface Letter {
  readonly letter: string;
  readonly isDisabled: boolean;
}
