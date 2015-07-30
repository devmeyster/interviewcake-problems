var x = {
  "div": {
    "class": "greetings",
    "color": "red",
    "text": "hello"
  }
};

//<div class="greetings" color="red">hello</div>
 
function serialize(obj){
  var result = "";

  if(obj && typeof obj === 'object'){
    var results = [];
    for(var key in obj){
      var other = "";
      var elms = obj[key];

      // for(var attr in elms){
      //   console.log(attr);
      //   other += attr+"="+ '"' +elms[attr]+ '"' + " ";
      // }
      var resK = serialize(key);
      var res = serialize(elms);
      results.push(resK+"="+ res);
      console.log(resK);
      console.log(res);
      result += "<"+key +" "+ other + "</"+key+">";
    }
    console.log(results);
  }

  if(typeof obj === 'string'){
    return '"' + obj + '"';
  }

  return result;
}

var x = serialize(x);
console.log(x);