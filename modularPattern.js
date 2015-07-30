(function plugin2(dom) {
    return {
        colorize: function(selector, property) {
            console.log("hello");
        }
    };
})();
 
function plugin1(dom) {
        return {
          colorize: function() {
              console.log("hello");
          }
        };
};

var x = plugin1();
x.colorize();