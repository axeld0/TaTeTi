export const TURNS = {
    X: '✕',
    O :'○'
  
  }
  
  //combinaciones de casillas que indican que alguno gano
  export const WINNER_COMBOS = [
    //HORIZONTALS
    [0, 1, 2],
    [2, 3, 4],
    [6, 7, 8],
    //VERTICALES
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //DIAGONALES
    [0, 4, 8],
    [2, 4, 6],
  
  ]