'use client';
import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { X, RotateCcw, Trophy } from 'lucide-react';
import { GameSectionProps, Direction, Position, GAME_CONFIG } from '@/types/game';
const { gridSize: GRID_SIZE, cellSize: CELL_SIZE, initialSpeed: INITIAL_SPEED } = GAME_CONFIG;
export default function GameSection({ setIsGameOpen }: GameSectionProps) {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    setFood(newFood);
  }, []);
  const resetGame = useCallback(() => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setIsPlaying(true);
    generateFood();
  }, [generateFood]);
  const checkCollision = useCallback((head: Position) => {
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true;
    }
    for (let i = 0; i < snake.length - 1; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        return true;
      }
    }
    return false;
  }, [snake]);
  const moveSnake = useCallback(() => {
    if (gameOver || !isPlaying) return;
    setSnake(prevSnake => {
      const head = { ...prevSnake[0] };
      switch (direction) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
      }
      if (checkCollision(head)) {
        setGameOver(true);
        setIsPlaying(false);
        if (score > highScore) {
          setHighScore(score);
        }
        return prevSnake;
      }
      const newSnake = [head, ...prevSnake];
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10);
        generateFood();
      } else {
        newSnake.pop();
      }
      return newSnake;
    });
  }, [direction, gameOver, isPlaying, food, score, highScore, checkCollision, generateFood]);
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying) return;
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, isPlaying]);
  useEffect(() => {
    if (!isPlaying) return;
    const gameLoop = setInterval(moveSnake, INITIAL_SPEED);
    return () => clearInterval(gameLoop);
  }, [moveSnake, isPlaying]);
  return (
    <motion.div
      className="bg-black/90 backdrop-blur-sm rounded-lg p-6 border border-lime-400/30 h-fit sticky top-8"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-lime-400">Snake Game</h3>
        <button
          onClick={() => setIsGameOpen(false)}
          className="p-3 hover:bg-magenta-500/30 rounded-lg transition-all border-2 border-magenta-500/50 hover:border-magenta-400 shadow-lg shadow-magenta-500/20 hover:shadow-xl hover:shadow-magenta-500/40 hover:scale-110"
        >
          <X className="w-6 h-6 text-magenta-400" />
        </button>
      </div>
      <div className="space-y-4">
        {}
        <div className="flex justify-between items-center">
          <div className="text-center">
            <p className="text-sm text-cyan-400/70">Score</p>
            <p className="text-2xl font-bold text-lime-400">{score}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-cyan-400/70 flex items-center gap-1">
              <Trophy className="w-4 h-4 text-magenta-400" />
              High Score
            </p>
            <p className="text-2xl font-bold text-magenta-400">{highScore}</p>
          </div>
        </div>
        {}
        <div className="relative bg-black rounded-lg p-2 border border-lime-400/30">
          <div
            className="relative mx-auto"
            style={{
              width: GRID_SIZE * CELL_SIZE,
              height: GRID_SIZE * CELL_SIZE,
              background: 'repeating-linear-gradient(0deg, rgba(163, 230, 53, 0.1) 0px, rgba(163, 230, 53, 0.1) 1px, transparent 1px, transparent 15px), repeating-linear-gradient(90deg, rgba(163, 230, 53, 0.1) 0px, rgba(163, 230, 53, 0.1) 1px, transparent 1px, transparent 15px)',
            }}
          >
            {}
            {snake.map((segment, index) => (
              <div
                key={index}
                className={`absolute rounded-sm ${
                  index === 0 ? 'bg-gradient-to-br from-lime-400 to-cyan-400 shadow-lg shadow-lime-400/50' : 'bg-lime-400'
                }`}
                style={{
                  left: segment.x * CELL_SIZE,
                  top: segment.y * CELL_SIZE,
                  width: CELL_SIZE - 2,
                  height: CELL_SIZE - 2,
                }}
              />
            ))}
            {}
            <div
              className="absolute bg-gradient-to-br from-magenta-500 to-lime-400 rounded-full animate-pulse"
              style={{
                left: food.x * CELL_SIZE,
                top: food.y * CELL_SIZE,
                width: CELL_SIZE - 2,
                height: CELL_SIZE - 2,
                boxShadow: '0 0 15px rgba(217, 70, 239, 0.8)'
              }}
            />
            {}
            {gameOver && (
              <div className="absolute inset-0 bg-black/90 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center border border-magenta-500/50 bg-black/50 p-6 rounded-lg">
                  <p className="text-2xl font-bold text-magenta-400 mb-2">Game Over!</p>
                  <p className="text-cyan-400 mb-4">Score: {score}</p>
                </div>
              </div>
            )}
            {}
            {!isPlaying && !gameOver && (
              <div className="absolute inset-0 bg-black/90 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center border border-lime-400/50 bg-black/50 p-6 rounded-lg">
                  <p className="text-xl font-bold text-lime-400 mb-2">Ready to Play?</p>
                  <p className="text-sm text-cyan-400/70">Use arrow keys to move</p>
                </div>
              </div>
            )}
          </div>
        </div>
        {}
        <div className="space-y-2">
          {!isPlaying ? (
            <button
              onClick={resetGame}
              className="w-full py-4 bg-gradient-to-r from-lime-400 to-cyan-400 hover:from-lime-500 hover:to-cyan-500 text-black font-black text-lg rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-lime-400/30 hover:shadow-xl hover:shadow-lime-400/40 hover:scale-105"
            >
              {gameOver ? (
                <>
                  <RotateCcw className="w-6 h-6" />
                  Play Again
                </>
              ) : (
                'Start Game'
              )}
            </button>
          ) : (
            <button
              onClick={() => {
                setIsPlaying(false);
                setGameOver(true);
              }}
              className="w-full py-4 bg-magenta-500/30 hover:bg-magenta-500/40 text-magenta-400 border-2 border-magenta-500/70 hover:border-magenta-400 font-black text-lg rounded-lg transition-all shadow-xl shadow-magenta-500/30 hover:shadow-2xl hover:shadow-magenta-500/50 hover:scale-105"
            >
              Pause
            </button>
          )}
          {}
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div></div>
            <button
              onClick={() => direction !== 'DOWN' && setDirection('UP')}
              className="p-4 bg-lime-400/20 hover:bg-lime-400/30 border-2 border-lime-400/50 hover:border-lime-400 text-lime-400 font-bold text-xl rounded-lg transition-all shadow-lg shadow-lime-400/20 disabled:opacity-30 disabled:shadow-none"
              disabled={!isPlaying}
            >
              ↑
            </button>
            <div></div>
            <button
              onClick={() => direction !== 'RIGHT' && setDirection('LEFT')}
              className="p-4 bg-cyan-400/20 hover:bg-cyan-400/30 border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-400 font-bold text-xl rounded-lg transition-all shadow-lg shadow-cyan-400/20 disabled:opacity-30 disabled:shadow-none"
              disabled={!isPlaying}
            >
              ←
            </button>
            <button
              onClick={() => direction !== 'UP' && setDirection('DOWN')}
              className="p-4 bg-lime-400/20 hover:bg-lime-400/30 border-2 border-lime-400/50 hover:border-lime-400 text-lime-400 font-bold text-xl rounded-lg transition-all shadow-lg shadow-lime-400/20 disabled:opacity-30 disabled:shadow-none"
              disabled={!isPlaying}
            >
              ↓
            </button>
            <button
              onClick={() => direction !== 'LEFT' && setDirection('RIGHT')}
              className="p-4 bg-cyan-400/20 hover:bg-cyan-400/30 border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-400 font-bold text-xl rounded-lg transition-all shadow-lg shadow-cyan-400/20 disabled:opacity-30 disabled:shadow-none"
              disabled={!isPlaying}
            >
              →
            </button>
          </div>
        </div>
        <p className="text-xs text-cyan-400/50 text-center">
          Use arrow keys or buttons to control the snake
        </p>
      </div>
    </motion.div>
  );
}
