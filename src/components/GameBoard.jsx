import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard(props) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex , colIndex) {
    setGameBoard((previusGameBoard) => {
      const updatedBoard = [...previusGameBoard.map(innerArray => [...innerArray])];
      updatedBoard[rowIndex][colIndex]=props.activePlayerSymbol;
      return updatedBoard;
    });

    props.onSelectSquare();
  }

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
