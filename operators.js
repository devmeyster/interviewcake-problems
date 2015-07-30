// var multiply = function(x, y) {
//   /* START SOLUTION */
//   if (x === 0 || y === 0) { return 0; }
//   // One is negative
//   if (x < 0 ^ y < 0) {
//     return -multiply(Math.abs(x), Math.abs(y));
//   // Both are negative
//   } else if (x < 0 && y < 0) {
//     return multiply(Math.abs(x), Math.abs(y));
//   }

//   // Neither is negative
//   var xStr = x.toString().split('.');
//   var yStr = y.toString().split('.');
//   var decimals = ( (xStr[1] || '') + (yStr[1] || '') ).length;

//   var myX = parseInt(xStr[0] + xStr[1], 10);
//   var myY = parseInt(yStr[0] + yStr[1], 10);

//   var counter = myY;
//   var total = 0;
//   while(counter--) {
//     total += myX;
//   }
//   // Skip decimal handling if not needed
//   if (decimals === 0) { return total; }

//   total = total.toString().split('');

//   // Insert the decimal at proper place, as recorded before multiplication
//   if (decimals > total.length) {
//     var pack = [];
//     for (var i = 0; i < decimals - total.length; i++) { pack.push(0); }
//     total = pack.concat(total);
//   }

//   total.splice(total.length - decimals, 0, '.');
//   return parseFloat( total.join('') );
//   /* ELSE
//   // TODO: should return the product of x * y
//   END SOLUTION */
// };


// var divide = function(x, y) {
//   /* START SOLUTION */
//   var recursiveDiv = function(x, y, place) {
//     if (x === 0) { return 0; }
//     var remainder = x;
//     var divident = 0;

//     while(remainder >= y) {
//       remainder -= y;
//       divident++;
//     }

//     // Getting a bit long in the decimal, let's stop here and signify whether we should round
//     if (place > 3) { return divident >= 5; }

//     // Recursively divide the next decimal place
//     var remainderDiv = recursiveDiv( multiply(remainder, 10), y, place + 1 );
//     // If we stopped in the lower stack call, let's round (or not) and return
//     if (typeof remainderDiv === "boolean") { return divident + Number(remainderDiv); }
//     // Remove decimal from remainder divident and append all behind decimal
//     var divInt = parseFloat( '0.' + remainderDiv.toString().replace(".","") );
//     // Append to current divident and return
//     return divident + divInt;
//   };

//   // One is negative
//   if (x < 0 ^ y < 0) {
//     return -recursiveDiv(Math.abs(x), Math.abs(y), 0);
//   // Both are negative
//   } else if (x < 0 && y < 0) {
//     return recursiveDiv(Math.abs(x), Math.abs(y), 0);
//   // Neither is negative
//   } else {
//     return recursiveDiv(x, y, 0);
//   }
//   /* ELSE
//   // TODO: should return the divident of x / y
//   END SOLUTION */
// };

// function divide(x, y){

//   var subDivide = function (x, y, place){
//     if(x === 0 || y === 0){ return 0;}

//     var remainder = x;
//     var divident = 0;

//     while(remainder >= y){
//       remainder -= y;
//       divident ++;
//     }

//     if(place > 1){ return divident >= 5; }

//     var decimal = subDivide(remainder*10, y, place+1);
//     console.log(decimal);
//     var divInt = parseFloat("0."+decimal.toString().replace(".",""));
//     console.log(divInt);
//     return divident+divInt;
//   };

//   if ( x < 0 ^ y < 0) {
//     return -subDivide(Math.abs(x), Math.abs(y), 0);
//   } else {
//     return subDivide(Math.abs(x), Math.abs(y), 0);
//   }

// }

function divide (divident, divisor){

  var quotient = 0;
  var currentQuotientBase = 1;
  var currentDivisor = divisor; 

  while(divident >= divisor){
    if(divident >= currentDivisor){
      divident -= currentDivisor;
      quotient += currentQuotientBase;
      currentDivisor*= 2;
      currentQuotientBase *= 2;
    } else {
      currentDivisor /= 2;
      currentQuotientBase /= 2;
    }

  }
  return quotient;
};

console.log(divide(15, 3));