export class DisplayPlayersOnBoardQuery {
  constructor(public readonly players: Player[]) {}
}

interface Player {
  readonly id: string;
  readonly playerId: number;
  readonly username: string;
  readonly isActive: boolean;
  readonly isReady: boolean;
  readonly choice: string;
}
