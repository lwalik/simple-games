export interface PlayerDTO {
  readonly id: string;
  readonly playerId: number;
  readonly username: string;
  readonly isActive: boolean;
  readonly isReady: boolean;
  readonly choice: string;
  readonly wantNext: boolean;
}
