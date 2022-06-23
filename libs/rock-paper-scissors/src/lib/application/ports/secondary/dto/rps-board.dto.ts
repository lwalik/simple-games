import { PlayerDTO } from './player.dto';

export interface RpsBoardDTO {
  readonly id: string;
  readonly players: PlayerDTO[];
  readonly maxPlayers: number;
}
