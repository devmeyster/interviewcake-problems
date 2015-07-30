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


// function isBinaryTree(root){
//   console.log(root);
//   var stack = [];
//   stack.push([root, Number.MIN_VALUE, Number.MAX_VALUE]);

//   while(stack.length) {
//     var nodeTupal = stack.pop();
//     var node = nodeTupal[0];
//     var lowerBound = nodeTupal[1];
//     var upperBound = nodeTupal[2];

//     if (node.value < lowerBound || node.value > upperBound){
//       return false;
//     } else {
//       if(node.left !== null){
//         stack.push([node.left, lowerBound, node.value]);
//       }
//       if(node.right !== null){
//         stack.push([node.right, node.value, upperBound]);
//       }
//     }
//   }
//   return true;
// };

//recursive solution

function isBinaryTree(root, MIN_VALUE, MAX_VALUE){
  if(root === null){
    return true;
  }

  if(root.value < MIN_VALUE || root.value > MAX_VALUE){
    return false; 
  }

  return isBinaryTree(root.left, MIN_VALUE, root.value) && isBinaryTree(root.right, root.value, MAX_VALUE);

};

var x = isBinaryTree(bst, Number.MIN_VALUE, Number.MAX_VALUE);

console.log(x);