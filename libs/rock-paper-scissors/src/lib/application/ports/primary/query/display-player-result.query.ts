export class DisplayPlayerResultQuery {
  constructor(
    public readonly username: string,
    public readonly choice: {
      name: string;
      isVisible: boolean;
    },
    public readonly isReady: boolean,
    public readonly isCurrent: boolean,
    public readonly wantNext: boolean
  ) {}
}
