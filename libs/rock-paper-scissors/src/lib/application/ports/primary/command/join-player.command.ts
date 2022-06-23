export class JoinPlayerCommand {
  constructor(
    public readonly player: PlayerDTO,
    public readonly username: string
  ) {}
}

interface PlayerDTO {
  readonly id: string;
  readonly playerId: number;
  readonly username: string;
  readonly isActive: boolean;
  readonly isReady: boolean;
  readonly choice: string;
}
