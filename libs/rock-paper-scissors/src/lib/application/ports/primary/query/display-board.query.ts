export class DisplayBoardQuery {
  constructor(
    public readonly currentPlayer: Player,
    public readonly otherPlayers: Player[],
    public readonly isVisible: boolean = false
  ) {}
}

interface Player {
  readonly id: string;
  readonly playerId: number;
  readonly username: string;
  readonly isActive: boolean;
  readonly isReady: boolean;
  readonly choice: string;
}
