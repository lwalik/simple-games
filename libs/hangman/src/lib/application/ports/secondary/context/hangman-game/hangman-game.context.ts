export interface HangmanGameContext {
  readonly username: string;
  readonly selectedLevel: string;
  readonly selectedLetters: string[];
  readonly words: string[];
  readonly currentWord: string;
  readonly livesCount: number;
}
