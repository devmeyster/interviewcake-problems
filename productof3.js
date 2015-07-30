function product(array) {
  var highest_product_of_3 = array[0]*array[1]*array[2],
      highest_product_of_2 = array[0]*array[1],
      highest = Math.max(array[0], array[1]),
      lowest_product_of_2 = array[0]*array[1],
      lowest = Math.min(array[0], array[1]);

  for(var i = 2; i < array.length; i++){
    var el = array[i];
    
    highest_product_of_3 = Math.max(highest_product_of_3, highest_product_of_2*el, lowest_product_of_2*el);

    highest_product_of_2 = Math.max(highest_product_of_2, highest*el, lowest*el);

    lowest_product_of_2 = Math.min(lowest_product_of_2, highest*el, lowest*el);

    highest = Math.max(highest, el);
    
    lowest = Math.min(lowest, el);
  }
 
  return highest_product_of_3;
};

var x = product([1, 10, -5, 1, -100]);
console.log(x);