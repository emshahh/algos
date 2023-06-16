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

  findClosestValueInBst(tree, target){
    const calculateDifference = (target, currentNodeVal) => Math.abs(currentNodeVal - target)
    let output = tree.value
    let shortestDifference = calculateDifference(target, output)
    const traverse = (node) => {
      if (!node) return
      let currentDifference = calculateDifference(target, node.value)
      if ( currentDifference < shortestDifference){
        shortestDifference = currentDifference
        output = node.value
      }
      if (target > node.value) traverse(node.right)
      else if (target < node.value) traverse(node.left)
    }
    traverse(tree)
    return output
  }
}

