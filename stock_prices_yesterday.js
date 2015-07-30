var stock_prices_yesterday = [45, 40, 39, 55];

 
function trade(array){
  if(array.length < 2){
    console.log("getting profit requires at least 2 prices");
  }
  var minPrice = array[0];
  var maxProfit = array[1]-array[0];
  
  for(var i = 1; i < array.length; i++) {
    var currentPrice = array[i];
    var potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit;
};
 
var solution = trade(stock_prices_yesterday);
console.log(solution);
