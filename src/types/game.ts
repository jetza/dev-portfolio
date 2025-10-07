export interface GameSectionProps {
  setIsGameOpen: (open: boolean) => void;
}
export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
export type Position = { 
  x: number; 
  y: number; 
};
export interface GameConfig {
  gridSize: number;
  cellSize: number;
  initialSpeed: number;
}
export const GAME_CONFIG: GameConfig = {
  gridSize: 20,
  cellSize: 15,
  initialSpeed: 150
};
