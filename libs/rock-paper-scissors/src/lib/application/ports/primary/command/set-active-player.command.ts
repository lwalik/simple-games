export class SetActivePlayersCommand {
  constructor(
    public readonly playerId: string,
    public readonly isActive: boolean
  ) {}
}
