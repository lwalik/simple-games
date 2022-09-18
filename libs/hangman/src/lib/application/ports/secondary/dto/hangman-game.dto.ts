export interface HangmanGameDTO {
  readonly secretWords: secretWords[];
}

interface secretWords {
  words: string[];
  level: string;
}
