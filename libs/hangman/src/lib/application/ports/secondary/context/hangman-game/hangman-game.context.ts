export interface HangmanGameContext {
  readonly username: string;
  readonly level: string;
  readonly selectedLetters: string[];
  readonly words: string[];
}
