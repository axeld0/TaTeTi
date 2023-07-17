import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import { TURNS } from "./constant"
import { checkWinner, checkEndGame } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"



//app
function App() {


  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  //estado para cambio de turno
  const[turn, setTurn] = useState(TURNS.X)

  
  //reset game
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null) 
  }



  //estado para saber el ganador
    const [winner, setWinner] = useState(null)


  


  //actualizacion de tablero
  const updateBoard = (index) => {
    //si está lleno el casillero o hay un ganador
    if(board[index] || winner) return 
    //actualizar el tablero 
    const newBoard =  [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // nuevo turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //chequear el ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
     setWinner(newWinner) //gano uno 
    } else if(checkEndGame(newBoard)){
      setWinner(false) //empate
    }
    }

  return (
    <main className="board">
    <h1>Ta te Ti</h1>
    <button onClick={resetGame}>Reset</button>
    <section className="game">
      {
      board.map((square, index) => {
        return (
         <Square key = {index}
         index = {index}
         updateBoard={updateBoard}
         >
          {board[index]}
         </Square>
        )
      })
    }
    </section>
    <section className="turn">
      <Square isSelected= {turn===TURNS.X}>{TURNS.X}</Square>
      <Square isSelected= {turn===TURNS.O}>{TURNS.O}</Square>
    </section>

    <WinnerModal resetGame={resetGame} winner={winner}/>
    </main> 
  )
}
export default App
