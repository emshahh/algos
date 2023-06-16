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

  insert(val, root){
    if (!root) return new Node(val)
    if (val > root.value) root.left = this.insert(val, root.left)
    else root.right = this.insert(val, root.right)
  }
}

