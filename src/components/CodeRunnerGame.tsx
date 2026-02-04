import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Trophy, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlassCard from './GlassCard';

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  type: 'player' | 'bug' | 'commit' | 'powerup';
  color?: string;
}

const CodeRunnerGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameOver'>('idle');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('coderunner-highscore');
    return saved ? parseInt(saved, 10) : 0;
  });

  const gameRef = useRef({
    player: { x: 100, y: 150, width: 40, height: 40, vy: 0 },
    obstacles: [] as GameObject[],
    collectibles: [] as GameObject[],
    score: 0,
    speed: 3,
    isJumping: false,
    groundY: 200,
    animationFrame: 0,
    lastObstacleTime: 0,
    lastCollectibleTime: 0,
  });

  const resetGame = useCallback(() => {
    gameRef.current = {
      player: { x: 100, y: 150, width: 40, height: 40, vy: 0 },
      obstacles: [],
      collectibles: [],
      score: 0,
      speed: 3,
      isJumping: false,
      groundY: 200,
      animationFrame: 0,
      lastObstacleTime: 0,
      lastCollectibleTime: 0,
    };
    setScore(0);
  }, []);

  const startGame = useCallback(() => {
    resetGame();
    setGameState('playing');
  }, [resetGame]);

  const jump = useCallback(() => {
    const game = gameRef.current;
    if (!game.isJumping && gameState === 'playing') {
      game.player.vy = -12;
      game.isJumping = true;
    }
  }, [gameState]);

  // Handle keyboard and touch
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (gameState === 'idle' || gameState === 'gameOver') {
          startGame();
        } else {
          jump();
        }
      }
    };

    const handleTouch = () => {
      if (gameState === 'idle' || gameState === 'gameOver') {
        startGame();
      } else {
        jump();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const canvas = canvasRef.current;
    canvas?.addEventListener('touchstart', handleTouch);
    canvas?.addEventListener('click', handleTouch);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      canvas?.removeEventListener('touchstart', handleTouch);
      canvas?.removeEventListener('click', handleTouch);
    };
  }, [gameState, jump, startGame]);

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const gameLoop = () => {
      const game = gameRef.current;
      const now = Date.now();

      // Clear canvas
      ctx.fillStyle = 'hsl(222, 47%, 2%)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw scrolling code background
      ctx.fillStyle = 'hsl(217, 91%, 60%)';
      ctx.globalAlpha = 0.1;
      const codeLines = ['const ai = true;', 'ship(code);', 'build.fast();', 'no.bugs();', 'deploy();'];
      for (let i = 0; i < 5; i++) {
        const offset = (game.animationFrame * 0.5 + i * 60) % (canvas.width + 200) - 100;
        ctx.font = '12px JetBrains Mono, monospace';
        ctx.fillText(codeLines[i % codeLines.length], canvas.width - offset, 30 + i * 40);
      }
      ctx.globalAlpha = 1;

      // Draw ground
      ctx.fillStyle = 'hsl(217, 33%, 15%)';
      ctx.fillRect(0, game.groundY + game.player.height, canvas.width, canvas.height - game.groundY);

      // Draw constellation dots
      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(
          (i * 80 + game.animationFrame * 0.3) % canvas.width,
          30 + (i % 3) * 50,
          2,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = 'hsl(217, 91%, 60%)';
        ctx.globalAlpha = 0.3;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Update player
      game.player.vy += 0.6; // Gravity
      game.player.y += game.player.vy;

      if (game.player.y >= game.groundY) {
        game.player.y = game.groundY;
        game.player.vy = 0;
        game.isJumping = false;
      }

      // Draw player (robot/code block)
      ctx.fillStyle = 'hsl(217, 91%, 60%)';
      ctx.fillRect(game.player.x, game.player.y, game.player.width, game.player.height);
      ctx.strokeStyle = 'hsl(189, 94%, 43%)';
      ctx.lineWidth = 2;
      ctx.strokeRect(game.player.x, game.player.y, game.player.width, game.player.height);
      
      // Player face
      ctx.fillStyle = 'hsl(0, 0%, 100%)';
      ctx.fillRect(game.player.x + 8, game.player.y + 10, 8, 8);
      ctx.fillRect(game.player.x + 24, game.player.y + 10, 8, 8);
      ctx.fillRect(game.player.x + 10, game.player.y + 26, 20, 4);

      // Spawn obstacles
      if (now - game.lastObstacleTime > 1500 - Math.min(game.score * 10, 500)) {
        game.obstacles.push({
          x: canvas.width,
          y: game.groundY,
          width: 30,
          height: 40,
          type: 'bug',
        });
        game.lastObstacleTime = now;
      }

      // Spawn collectibles
      if (now - game.lastCollectibleTime > 2000) {
        const isCommit = Math.random() > 0.3;
        game.collectibles.push({
          x: canvas.width,
          y: game.groundY - 40 - Math.random() * 60,
          width: 25,
          height: 25,
          type: isCommit ? 'commit' : 'powerup',
        });
        game.lastCollectibleTime = now;
      }

      // Update and draw obstacles
      game.obstacles = game.obstacles.filter((obs) => {
        obs.x -= game.speed;

        // Draw bug
        ctx.fillStyle = 'hsl(0, 84%, 60%)';
        ctx.beginPath();
        ctx.ellipse(obs.x + 15, obs.y + 15, 15, 12, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'hsl(0, 60%, 40%)';
        ctx.fillRect(obs.x + 5, obs.y + 25, 20, 10);
        
        // Antennae
        ctx.strokeStyle = 'hsl(0, 60%, 40%)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(obs.x + 10, obs.y + 5);
        ctx.lineTo(obs.x + 5, obs.y - 5);
        ctx.moveTo(obs.x + 20, obs.y + 5);
        ctx.lineTo(obs.x + 25, obs.y - 5);
        ctx.stroke();

        // Collision detection
        if (
          game.player.x < obs.x + obs.width - 10 &&
          game.player.x + game.player.width > obs.x + 10 &&
          game.player.y < obs.y + obs.height - 5 &&
          game.player.y + game.player.height > obs.y + 5
        ) {
          setGameState('gameOver');
          if (game.score > highScore) {
            setHighScore(game.score);
            localStorage.setItem('coderunner-highscore', game.score.toString());
          }
        }

        return obs.x > -50;
      });

      // Update and draw collectibles
      game.collectibles = game.collectibles.filter((col) => {
        col.x -= game.speed;

        if (col.type === 'commit') {
          ctx.fillStyle = 'hsl(142, 76%, 45%)';
          ctx.beginPath();
          ctx.arc(col.x + 12, col.y + 12, 12, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = 'hsl(0, 0%, 100%)';
          ctx.font = 'bold 14px sans-serif';
          ctx.fillText('+', col.x + 7, col.y + 17);
        } else {
          ctx.fillStyle = 'hsl(189, 94%, 43%)';
          ctx.beginPath();
          const cx = col.x + 12;
          const cy = col.y + 12;
          for (let i = 0; i < 5; i++) {
            const angle = (i * 72 - 90) * (Math.PI / 180);
            const x = cx + Math.cos(angle) * 12;
            const y = cy + Math.sin(angle) * 12;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();
        }

        // Collect detection
        if (
          game.player.x < col.x + col.width &&
          game.player.x + game.player.width > col.x &&
          game.player.y < col.y + col.height &&
          game.player.y + game.player.height > col.y
        ) {
          game.score += col.type === 'commit' ? 10 : 25;
          setScore(game.score);
          return false;
        }

        return col.x > -50;
      });

      // Increase difficulty
      game.speed = 3 + Math.floor(game.score / 50) * 0.5;

      // Draw score
      ctx.fillStyle = 'hsl(0, 0%, 100%)';
      ctx.font = 'bold 16px Outfit, sans-serif';
      ctx.fillText(`Score: ${game.score}`, 10, 25);
      ctx.fillStyle = 'hsl(217, 91%, 60%)';
      ctx.fillText(`High: ${highScore}`, canvas.width - 100, 25);

      game.animationFrame++;

      if (gameState === 'playing') {
        animationId = requestAnimationFrame(gameLoop);
      }
    };

    animationId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [gameState, highScore]);

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            <Gamepad2 size={16} />
            Interactive Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
            Code <span className="gradient-text">Runner</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Dodge bugs, collect commits. How long can you ship code? 🚀
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <GlassCard className="p-4 relative overflow-hidden" glow="primary">
            <canvas
              ref={canvasRef}
              width={600}
              height={280}
              className="w-full rounded-xl cursor-pointer"
              style={{ background: 'hsl(222, 47%, 2%)' }}
            />

            {gameState === 'idle' && (
              <div className="absolute inset-4 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm rounded-xl">
                <Gamepad2 className="w-16 h-16 text-primary mb-4 animate-bounce-subtle" />
                <h3 className="text-xl font-display font-bold text-foreground mb-2">Ready to Run?</h3>
                <p className="text-muted-foreground text-sm mb-4">Press Space, tap, or click to jump!</p>
                <Button onClick={startGame} className="gap-2 btn-glow">
                  <Play size={18} /> Start Game
                </Button>
              </div>
            )}

            {gameState === 'gameOver' && (
              <div className="absolute inset-4 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm rounded-xl">
                <Trophy className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">Game Over!</h3>
                <p className="text-3xl font-bold gradient-text mb-2">{score}</p>
                {score >= highScore && score > 0 && (
                  <p className="text-sm text-accent mb-4">🎉 New High Score!</p>
                )}
                <p className="text-muted-foreground text-sm mb-4">High Score: {highScore}</p>
                <Button onClick={startGame} className="gap-2 btn-glow">
                  <RotateCcw size={18} /> Play Again
                </Button>
              </div>
            )}
          </GlassCard>

          <div className="flex justify-center gap-8 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500" />
              <span>Commits +10</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-accent" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} />
              <span>Power-ups +25</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-destructive" />
              <span>Bugs ☠️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeRunnerGame;
