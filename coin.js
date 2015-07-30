function coin(amount, denominations){
    var count = 0;
    var array = denominations;
    // console.log(array);

    array.forEach(function(item){
      var amountLeft = amount % item;
      console.log(amountLeft);
      // var value = coin();
      // count += value;
    });
}; 
 
var x = coin(4, [1,2,3]);
console.log(x);