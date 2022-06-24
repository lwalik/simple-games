import { PlayerDTO } from '../../secondary/dto/player.dto';

export class TakePlayerCommand {
  constructor(public readonly player: PlayerDTO) {}
}
