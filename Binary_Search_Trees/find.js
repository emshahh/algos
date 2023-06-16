class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null
  }

  search(val, node = this.root){
    //edge case: if there is no root return false
    if (!node) return false
    //base case: if we find the node with the matching val return true
    if (val === node.value) return true
    //traverse through recursion
    val > node.value ? this.search(val, node.right) : this.search(val, node.left)
  }
}