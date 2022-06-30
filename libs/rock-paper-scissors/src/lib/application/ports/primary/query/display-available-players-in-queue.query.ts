export class DisplayAvailablePlayersInQueueQuery {
  constructor(
    public readonly players: {
      isActive: boolean;
    }
  ) {}
}
