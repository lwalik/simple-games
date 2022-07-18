import { PlayerDTO } from '../dto/player.dto';

export interface GameContext {
  readonly currentPlayer: PlayerDTO;
  readonly queueStatus: boolean;
  readonly inGame: boolean;
}
