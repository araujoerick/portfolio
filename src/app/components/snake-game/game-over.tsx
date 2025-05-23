import React from "react";

interface GameOverProps {
  width: number;
  height: number;
  score: number;
  highScore: number;
  newHighScore: boolean;
}

export const GameOver: React.FC<GameOverProps> = ({
  width,
  height,
  score,
  highScore,
  newHighScore,
}) => {
  return (
    <div className="pb-12">
      <div
        id="GameBoard"
        className="relative mx-auto outline outline-lime-400"
        style={{
          width: width,
          height: height,
          outlineWidth: width / 50,
        }}
      >
        <div
          className="flex h-full flex-col justify-around text-center"
          style={{ fontSize: width / 15 }}
        >
          <div className="font-bold text-red-600">GAME OVER</div>
          <div>Your score: {score}</div>
          <div>
            {newHighScore ? "New h" : "H"}igh score: {highScore}
          </div>
          <div className="animate-pulse font-bold text-white">
            Press Space to restart
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
