// var arr = [];

// for (var i = 1; i <= 5; i++) (function(i) {
//     arr.push((function(){
//       console.log(i);
//     })());
// })(i);

// // console.log(arr);

// setTimeout(function() {
//     arr.shift()();
//  }, 1000);

for (var i = 0; i < 5; i++) (function(i) {
    setTimeout(function() {
        console.log(i);
     }, 1000);
})(i); 