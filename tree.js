// Binary search tree

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    } else {
      let current = this.root
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode
            return this
          } else {
            current = current.right
          }
        } else {
          return undefined
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false
    let current = this.root
    let found = false

    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    if (!found) return undefined
    return current
  }

  BFS() {
    let node
    const queue = []
    const data = []
    queue.push(this.root)
    while (queue.length) {
      node = queue.shift()
      data.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data
  }
}

const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(5)
tree.insert(2)
tree.insert(13)
tree.insert(11)
console.log(tree.BFS())

// isBalanced tree height of nodes

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true

  const getHeight = (node) => {
    if (!node) return 0
    let left = getHeight(node.left)
    let right = getHeight(node.right)

    if (left === -1 || right === -1) return -1

    if (Math.abs(left - right) > 1) return -1

    return Math.max(left, right) + 1
  }
  return getHeight(root) !== -1
}

// 101. Symmetric Tree https://leetcode.com/problems/symmetric-tree/

//  RE-DO
// iterative
const isSymmetric = function (root) {
  const stack = []
  let r = root.right
  let l = root.left
  stack.push(l, r)
  while (stack.length) {
    let right = stack.pop()
    let left = stack.pop()
    if (!right && !left) continue

    if (!left || !right || left.val != right.val) {
      return false
    } else {
      stack.push(left.right, right.left, left.left, right.right)
    }
  }

  return true
}
