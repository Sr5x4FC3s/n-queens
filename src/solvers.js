/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board({'n': n});
  var isFinish = false;

  var placeRook = function(row) {
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (isValid(row, i)) {
        if (row === n - 1) {
          isFinish = true;
          return;
        }
        placeRook(row + 1);
      } 
      if (isFinish === true) {
        return;
      }
      board.togglePiece(row, i);
    }
  };

  var isValid = function(row, column) {
    return (!board.hasRowConflictAt(row) && !board.hasColConflictAt(column));
  };

  placeRook(0);
  var solution = board.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  var board = new Board({'n': n});
  var isFinish = false;
  var placeRook = function(row) {

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (isValid(row, i)) {
        if (row === n - 1) {
          board.togglePiece(row, i);
          isFinish = true;
          solutionCount += 1;
          return;
        }
        placeRook(row + 1);
      }
      board.togglePiece(row, i);
    }
  };

  var isValid = function(row, column) {
    return (!board.hasRowConflictAt(row) && !board.hasColConflictAt(column));
  };
  // debugger;
  placeRook(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var solution = undefined; //fixme
  // debugger;
  var board = new Board({'n': n});
  var isFinish = false;
  var placeQueen = function(row) {
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (isValid(row, i)) {
        if (row === n - 1) {
          isFinish = true;
          return;
        }
        placeQueen(row + 1);
      }
      if (isFinish === true) {
        return;
      }
      board.togglePiece(row, i);
    }
  };

  var isValid = function(row, column) {
    return (!board.hasRowConflictAt(row) && !board.hasColConflictAt(column) && !board.hasMajorDiagonalConflictAt(board._getFirstRowColumnIndexForMajorDiagonalOn(row, column)) && !board.hasMinorDiagonalConflictAt(board._getFirstRowColumnIndexForMinorDiagonalOn(row, column)));
  };
  // debugger;
  placeQueen(0);
  var solution = board.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  if (n === 0) return 1;
  var board = new Board({'n': n});
  var isFinish = false;
  var placeQueen = function(row) {

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (isValid(row, i)) {
        if (row === n - 1) {
          board.togglePiece(row, i);
          // isFinish = true;
          solutionCount += 1;
          return;
        }
        placeQueen(row + 1);
      }
      board.togglePiece(row, i);
    }
  };

  var isValid = function(row, column) {
    return (!board.hasRowConflictAt(row) && !board.hasColConflictAt(column) && !board.hasMajorDiagonalConflictAt(board._getFirstRowColumnIndexForMajorDiagonalOn(row, column)) && !board.hasMinorDiagonalConflictAt(board._getFirstRowColumnIndexForMinorDiagonalOn(row, column)));
  };
  debugger;
  placeQueen(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
