function mergeRanges(array){
  var sortedArray = array.sort(function(a,b){
    return a[0] - b[0]; 
  });
  var results = [];
  var prev_start = array[0][0];
  var prev_end = array[0][1];

  for(var i = 1; i < sortedArray.length; i++){
    var el = sortedArray[i];
    if(el[0] <= prev_end){
      prev_end = Math.max(prev_end, el[1]);
    } else {
      results.push([prev_start, prev_end]);
      prev_start = el[0];
      prev_end = el[1];
    }

  }
  results.push([prev_start, prev_end]);
  console.log(sortedArray);
  return results;

}; 

var x = mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]);

console.log(x); //[(0, 1), (3, 8), (9, 12)]