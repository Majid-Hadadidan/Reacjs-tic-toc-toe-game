import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = () => {
    setActivePlayer((curActivePlayer) => {
    return  curActivePlayer === "X" ? "O" : "X";
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="player2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  );
}

export default App;
