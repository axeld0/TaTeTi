import { WINNER_COMBOS } from "../constant"
//METODO para saber si hay ganador
export const checkWinner = (boardToCheck) => {
    //vemos si hay ganador
    for (const combo of WINNER_COMBOS)
    {
      const[a, b, c] = combo
      //nos fijamos que sean los tres iguales
      if(boardToCheck [a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] ===boardToCheck[c])
      {
        return boardToCheck[a] 
      }
    }
    //si no hay ganador
    return null
  } 


   //chequear por empate
   export const checkEndGame = (newBoard) => {
    //revisamos por un empate
    //si no hay mas espacios vacios
    //en el tablero

    return newBoard.every((square)=> square !== null) //si todos los casilleros estan ocupados, quiere decir que no gano nadie
  }