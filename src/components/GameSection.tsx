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
    // Wall collision
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true;
    }
    // Self collision
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

      // Check if food is eaten
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
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 h-fit sticky top-8"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-purple-400">Snake Game</h3>
        <button
          onClick={() => setIsGameOpen(false)}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="space-y-4">
        {/* Score Display */}
        <div className="flex justify-between items-center">
          <div className="text-center">
            <p className="text-sm text-gray-400">Score</p>
            <p className="text-2xl font-bold text-purple-400">{score}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400 flex items-center gap-1">
              <Trophy className="w-4 h-4" />
              High Score
            </p>
            <p className="text-2xl font-bold text-pink-400">{highScore}</p>
          </div>
        </div>

        {/* Game Board */}
        <div className="relative bg-gray-900 rounded-lg p-2 border border-gray-700">
          <div
            className="relative mx-auto"
            style={{
              width: GRID_SIZE * CELL_SIZE,
              height: GRID_SIZE * CELL_SIZE,
              background: 'repeating-linear-gradient(0deg, #1f2937 0px, #1f2937 1px, transparent 1px, transparent 15px), repeating-linear-gradient(90deg, #1f2937 0px, #1f2937 1px, transparent 1px, transparent 15px)',
            }}
          >
            {/* Snake */}
            {snake.map((segment, index) => (
              <div
                key={index}
                className={`absolute rounded-sm ${
                  index === 0 ? 'bg-gradient-to-br from-purple-500 to-purple-600' : 'bg-purple-600'
                }`}
                style={{
                  left: segment.x * CELL_SIZE,
                  top: segment.y * CELL_SIZE,
                  width: CELL_SIZE - 2,
                  height: CELL_SIZE - 2,
                }}
              />
            ))}

            {/* Food */}
            <div
              className="absolute bg-gradient-to-br from-pink-500 to-red-500 rounded-full animate-pulse"
              style={{
                left: food.x * CELL_SIZE,
                top: food.y * CELL_SIZE,
                width: CELL_SIZE - 2,
                height: CELL_SIZE - 2,
              }}
            />

            {/* Game Over Overlay */}
            {gameOver && (
              <div className="absolute inset-0 bg-gray-900/90 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-400 mb-2">Game Over!</p>
                  <p className="text-gray-400 mb-4">Score: {score}</p>
                </div>
              </div>
            )}

            {/* Start Screen */}
            {!isPlaying && !gameOver && (
              <div className="absolute inset-0 bg-gray-900/90 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xl font-bold text-purple-400 mb-2">Ready to Play?</p>
                  <p className="text-sm text-gray-400">Use arrow keys to move</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-2">
          {!isPlaying ? (
            <button
              onClick={resetGame}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
            >
              {gameOver ? (
                <>
                  <RotateCcw className="w-5 h-5" />
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
              className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all"
            >
              Pause
            </button>
          )}

          {/* Mobile Controls */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div></div>
            <button
              onClick={() => direction !== 'DOWN' && setDirection('UP')}
              className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              disabled={!isPlaying}
            >
              ↑
            </button>
            <div></div>
            <button
              onClick={() => direction !== 'RIGHT' && setDirection('LEFT')}
              className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              disabled={!isPlaying}
            >
              ←
            </button>
            <button
              onClick={() => direction !== 'UP' && setDirection('DOWN')}
              className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              disabled={!isPlaying}
            >
              ↓
            </button>
            <button
              onClick={() => direction !== 'LEFT' && setDirection('RIGHT')}
              className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              disabled={!isPlaying}
            >
              →
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center">
          Use arrow keys or buttons to control the snake
        </p>
      </div>
    </motion.div>
  );
}
