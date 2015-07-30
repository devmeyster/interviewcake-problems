function parse (input, key){
  var stack = [];

  function checkDep (keys){
    console.log("hello", keys);
    var key = keys[0];
    stack.push(key);
    if(input !== undefined){
      for(var key in keys){
        checkDep(keys[key]);
      }
    }
  };
  checkDep(key);
  return stack[stack.length-1];
};
 
var input = {
  k1: 'v1',
  k2: {
    k21: 'v21',
    k22: {
      k221: 'v221'
    }
  },
  k3: {
    k31: 'v31'
  }
}

var keys = ['k2', 'k22', 'k221'];

if (output = parse(input, keys ) == 'v221')
{
  console.log('Success!')
}
else
{
  console.log("Output did not match 'v221'", output)
}

var x = parse(input, ['k2', 'k22', 'k221']);
console.log(x); // "main", "a", "c", "b"