require('print.js');
console.log("me");

 
var primeSieve = function (start, end, n) {
  /* START SOLUTION */
  var current = 2; var primes = range(0, end + 1);
  // While we haven't found all the primes.
  var count = 0;

  while (count < end) {
    // mark all multiples of current as not prime
    count++;
    for (var i = current + current; i <= end; i += current) {
      // null means not prime, a number means prime
      primes[i] = null;
    }
    // find the next current
    do {
      // Advance current at least once
      current += 1;
    // Then continue to advance it until we hit a prime number or we are out of
    // range.
    var a = !primes[current];
    var b = current <= end;
    } while (!primes[current] && current <= end);
  }
  // Filter out all values that aren't prime and aren't in our range
  return primes.slice(2).filter(function (val) { return val && val >= start; });
  /* END SOLUTION */
};

/* START SOLUTION */
var range = function (start, end) {
  var result = [];
  for (var i = start; i < end; i++) { result.push(i); }
  return result;
};

console.log(primeSieve(0, 10));