/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */
 
var spiral = function(matrix){

  var results = "";
  var startRowIdx = 0;
  var endRowIdx = matrix.length-1;
  var startColIdx = 0;
  var endColIdx = matrix[0].length-1;

  while (startRowIdx <= endRowIdx && startColIdx <= endColIdx) {

    for (var i = startColIdx; i <= endColIdx; i++) {
      results += matrix[startRowIdx][i] + " ";
    }
    startRowIdx++;

    for (var j = startRowIdx; j <= endRowIdx; j++) {
      results += matrix[j][endColIdx] + " ";
    }
    endColIdx--;

    if (startRowIdx <= endRowIdx) {
      for (var z = endColIdx; z >= startColIdx; z--) {
        results += matrix[endRowIdx][z] + " ";
      }
      endRowIdx--;
    }

    if (startColIdx <= endColIdx) {
      for (var c = endRowIdx; c >= startRowIdx; c--) {
        results += matrix[c][startColIdx] + " ";
      }
      startColIdx++;
    }
  }
  results = results.slice(0, results.length-1);

  return results;
};

matrix = 
[[11, 12, 13, 14, 15],
[21, 22, 23, 24, 25],
[31, 32, 33, 34, 35],
[41, 42, 43, 44, 45]];

var x = spiral(matrix);
console.log(x);