var BinarySearchTree = function(value){
  var binaryTree = Object.create(binaryTreePrototype);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
};

var binaryTreePrototype = {};

binaryTreePrototype.insert = function(val){
  if ( val < this.value ) {
    if ( this.left === null ) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if ( val > this.value) {
    if ( this.right === null ) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else {
    return "The tree already contains this value.";
  }
};


var bst = BinarySearchTree(3);
bst.insert(2);
bst.insert(4);
bst.insert(1);
bst.insert(5);
bst.insert(6);
// bst.insert(7);
// bst.insert(8);

// console.log(bst);

function isBalanced(treeRoot){
  var depths = [];

  var nodes = [];
  nodes.push([treeRoot, 0]);

  while(nodes.length) {
    var nodeTupal = nodes.pop();
    var node = nodeTupal[0];
    var depth = nodeTupal[1];
    // console.log(node);
    if (node.left === null && node.right === null){
      if(depths.indexOf(depth) === -1){
        depths.push(depth);
        // console.log(depths);
        if(depths.length > 2 || (depths.length === 2 && Math.abs(depths[0]-depths[1]) > 1)){
          return false;
        }
      }
    } else {
      if(node.left !== null){
        nodes.push([node.left, depth+1]);
      }
      if(node.right !== null){
        nodes.push([node.right, depth+1]);
      }
    }
  }
  return true;
};

var x = isBalanced(bst);

console.log(x);