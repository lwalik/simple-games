import { PlayerDTO } from '../../secondary/dto/player.dto';

export class DisplayPlayersQuery {
  constructor(public readonly players: PlayerDTO[]) {}
}
