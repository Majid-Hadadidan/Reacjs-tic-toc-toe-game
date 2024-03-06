import { useState } from "react";

const initialBoardGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ activePlayerSymbol, onSelectSquare }) {
  const [gameBoard, setGameBoard] = useState(initialBoardGame);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      console.log(updatedBoard);
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelectSquare();
  };
  return (
    <ol id="game-board" className="highlight-player">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
