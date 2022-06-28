import { PlayerDTO } from '../../secondary/dto/player.dto';

export class PlayerInContextQuery {
  constructor(public readonly current: PlayerDTO) {}
}
