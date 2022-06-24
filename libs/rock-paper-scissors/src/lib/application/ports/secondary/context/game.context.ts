import { PlayerDTO } from '../dto/player.dto';

export interface GameContext {
  readonly player: PlayerDTO;
}
