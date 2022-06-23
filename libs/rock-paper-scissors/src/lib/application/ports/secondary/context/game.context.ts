import { PlayerDTO } from '../dto/player.dto';

export interface GameContext {
  readonly queuePlayers: PlayerDTO[];
  readonly playersInGame: PlayerDTO[];
}
