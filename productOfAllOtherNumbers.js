var arr = [1, 7, 3, 4];

/*
[1, 7, 3, 4]
[84, 12, 28, 21]
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

productBefore
1
7
21
84

*/

function product(array){

  var productBefore = [];
  var productAfter = 1;
  var j = array.length-1;

  for(var i = 0; i < array.length; i++){
    if(i === 0){
      productBefore[0] = 1;
    } else {
      productBefore[i] = productBefore[i-1] * array[i-1];
    }
  }

  while(j >= 0){
    productBefore[j] = productBefore[j] * productAfter;
    productAfter *= array[j];
    j--;
  }
  return productBefore;

};

var solution = product(arr);
console.log(solution);