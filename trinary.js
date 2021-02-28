// Trinary Tree class
class Tree {
  constructor(root) {
    this.left = null
    this.root = root
    this.center = null
    this.right = null
  }
}

let myTrinaryTree = null;

// builds the tree
const buildTrinaryTree = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    element = arr[i]

    if (myTrinaryTree === null) {
      myTrinaryTree = new Tree(element)
      continue
    }

    insertIntoTrinaryTree(element, myTrinaryTree)
  }
}

// inserting into the tree
const insertIntoTrinaryTree = (element, tree) => {
  if (tree !== null) {
    let cursor = tree

    if (element === cursor.root) {
      if (cursor.center === null) {
        cursor.center = new Tree(element)
      } else {
        insertIntoTrinaryTree(element, cursor.center)
      }
    } else if (element < cursor.root) {
      if (cursor.left === null) {
        cursor.left = new Tree(element)
      } else {
        insertIntoTrinaryTree(element, cursor.left)
      }
    } else if (element > cursor.root) {
      if (cursor.right === null) {
        cursor.right = new Tree(element)
      } else {
        insertIntoTrinaryTree(element, cursor.right)
      }
    }
  }
}

// deletes an element from the tree, Note: this deletes the first element found
const deleteFromTrinaryTree = (element, tree) => {
  if (tree !== null) {

    let cursor = tree

    if (element === cursor.root) {
      if (cursor.center.root === element) {
       cursor.center = null
       } else {
         deleteFromTrinaryTree(element, cursor.center)
       }
    } else if (element < cursor.root) {
      if (cursor.left.root === element) {
       cursor.left = null
      } else {
        deleteFromTrinaryTree(element, cursor.left)
      }
    } else if (element > cursor.root) {
      if (cursor.right.root === element) {
        cursor.right = null
      } else {
        deleteFromTrinaryTree(element, cursor.right)
      }
    }
  }
}


// ---------------------------Execution------------------------ //

const arr = [5, 4, 9, 5, 7, 10, 2, 2]

buildTrinaryTree(arr)

console.log('myTrinaryTree after insertion', myTrinaryTree)

deleteFromTrinaryTree(7, myTrinaryTree)

console.log('myTrinaryTree after deletion', myTrinaryTree)