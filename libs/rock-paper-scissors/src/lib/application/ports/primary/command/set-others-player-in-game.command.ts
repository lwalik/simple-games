import { PlayerDTO } from '../../secondary/dto/player.dto';

export class SetOthersPlayerInGameCommand {
  constructor(public readonly currentPlayer: PlayerDTO) {}
}
