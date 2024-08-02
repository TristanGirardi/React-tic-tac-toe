import {useState} from 'react'
import Square from './Square';

const Board = () =>{
    const[squares, setSquares]= useState(Array(9).fill(null));
    const[xIsNext, setXIsNext]= useState(true);

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)){
            return;
        }
        const nextSquares = squares.slice();
        xIsNext?
        nextSquares[i] = "X":
        nextSquares[i] = "O";
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
      }

      function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

      function checkTie(squares) {
        let count = 0;
        for (let i = 0; i < squares.length; i++) {
            if (squares[i] != null) {
                count += 1;
            }
        }
        return count === 9;
    }

      const winner = calculateWinner(squares);
      const tie = checkTie(squares);
      let status;
      if (winner && tie===false) {
          status = <div className="status-winner">{"Winner: " + winner}</div>;
      } else if (tie===true) {
        status = <div className="status-winner">{"Game tied! Reset the board!"}</div>;
      }else{
        status = <div className="status-winner">{"Current player: " + (xIsNext ? "X" : "O")}</div>;
      }

    function handleReset() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }
   
    return (
    <div className="board">
        <div>
            <div className="status">{status}</div>
                <div className="board-row">
                 <Square
                 value={squares[0]}
                 handleClick={() => handleClick(0)}/>
                <Square
                 value={squares[1]}
                 handleClick={() => handleClick(1)}/>
                <Square
                 value={squares[2]}
                 handleClick={() => handleClick(2)}/>
                </div>
                <div className="board-row">
                 <Square
                 value={squares[3]}
                 handleClick={() => handleClick(3)}/>
                 <Square
                 value={squares[4]}
                 handleClick={() => handleClick(4)}/>
                 <Square
                 value={squares[5]}
                 handleClick={() => handleClick(5)}/>
                </div>
                <div className="board-row">
                 <Square
                 value={squares[6]}
                 handleClick={() => handleClick(6)}/>
                 <Square
                 value={squares[7]}
                 handleClick={() => handleClick(7)}/>
                 <Square
                 value={squares[8]}
                handleClick={() => handleClick(8)}/>
                </div>
                <div className="reset-board">
                <button  className="reset-button" onClick={handleReset}>Reset</button>
                </div>
                </div>
     </div>
    );
}
export default Board