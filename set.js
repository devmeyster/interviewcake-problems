var Set = function(){
  // var set = Object.create(setPrototype);
  // set._storage = undefined;

  this._storage = {};
  // return set;
};

// var setPrototype = {};

Set.prototype.add = function(item){
  this._storage[item] = true;
};

Set.prototype.contains = function(item){
  return !!this._storage[item];
};

Set.prototype.remove = function(item){
  delete this._storage[item];
};

var Obj = function(value){
  this.value = value;
};
 
// objPrototype = {};
Obj.prototype.toString = function(){
  return this.value;
};

var x = new Set();
var y = new Obj("mike");
var g = new Obj("art");
x.add(y);
var z = new Set();
z.add(g);

console.log(x);
console.log(z);

// y[x] = 40;
// console.log(z);