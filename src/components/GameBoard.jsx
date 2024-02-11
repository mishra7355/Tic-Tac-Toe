import { useState } from "react";

const playersGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBox, setGameBox] = useState(playersGameBoard);
  function handleGameBox(rowIndex, colIndex) {
    setGameBox((playersGameBoard) => {
      const updatedGameBoard = [
        ...playersGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedGameBoard;
    });
    onSelectSquare();
  }

  return (
    <>
      <ol id="game-board">
        {gameBox.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => handleGameBox(rowIndex, colIndex)}>
                    {col}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
export default GameBoard;
