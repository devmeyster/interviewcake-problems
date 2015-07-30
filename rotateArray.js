var dictionary = [ "m", "a", "b"];


function rotatePoint(dictionary){
  var leftIdx = 0;
  var rightIdx = dictionary.length-1;

  if(dictionary[leftIdx] < dictionary[rightIdx]){
    return 0;
  }

  while(leftIdx < rightIdx){
    var midIdx = Math.floor((rightIdx - leftIdx)/2);
   
    if(dictionary[leftIdx] > dictionary[midIdx]){
      rightIdx = midIdx;
    } else {
      leftIdx = midIdx;
    }

    if(leftIdx+1 === rightIdx){
      return rightIdx;
    }
  }
};
 
var x = rotatePoint(dictionary);
console.log(x);