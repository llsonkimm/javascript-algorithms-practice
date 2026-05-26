function dfsNQueens(n) {
  if (n < 1) {
    return [];
  }

  const result = [];

  function isSafe(board, row, col) {
    for (let i = 0; i < row; i++) {
      const prevCol = board[i];
      if (prevCol === col) return false;
      
      if (Math.abs(prevCol - col) === Math.abs(i - row)) return false;
    }
    return true;
  }

  function search(row, currentBoard) {
    if (row === n) {
      result.push([...currentBoard]);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(currentBoard, row, col)) {
        currentBoard.push(col);
        search(row + 1, currentBoard); 
        currentBoard.pop(); 
      }
    }
  }

  search(0, []);
  return result;
}

// Test Case
console.log(dfsNQueens(4)); 
