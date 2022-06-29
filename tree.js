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
// inorder traversal

var inorderTraversal = function (root) {
  const list = []

  const traverse = (node) => {
    if (!node) return null

    if (node.left) {
      traverse(node.left)
    }
    list.push(node.val)

    if (node.right) {
      traverse(node.right)
    }
  }

  traverse(root)
  return list
}

// ITERATIVE inorder traversal
function inorderTraversal(root) {
  const stack = []
  const res = []

  while (root || stack.length) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      res.push(root.val)
      root = root.right
    }
  }

  return res
}

// Flood Fill (DFS recursive) https://leetcode.com/problems/flood-fill/submissions/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  if (!image || image[sr][sc] === newColor || image.length < 1) {
    return image
  }
  const initColor = image[sr][sc]

  const fill = (image, r, c, newColor, initColor) => {
    // base case, if r or c is out of bounds or if initColor === newColor
    if (r < 0 || r >= image.length || c < 0 || c >= image[0].length || initColor !== image[r][c])
      return

    image[r][c] = newColor

    fill(image, r + 1, c, newColor, initColor)
    fill(image, r - 1, c, newColor, initColor)
    fill(image, r, c + 1, newColor, initColor)
    fill(image, r, c - 1, newColor, initColor)
  }
  fill(image, sr, sc, newColor, initColor)

  return image
}

// max area of island  https://leetcode.com/problems/max-area-of-island/submissions/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  // find area (resursive flood fill)
  const area = (r, c) => {
    // base case
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] == 0) return 0

    // mark visited island with 0 so it won't be visited again
    grid[r][c] = 0
    // 4 directional recursive
    return 1 + (area(r + 1, c) + area(r - 1, c) + area(r, c - 1) + area(r, c + 1))
  }
  // loop through the matrix for max area
  let maxArea = 0
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      maxArea = Math.max(maxArea, area(r, c))
    }
  }
  return maxArea
}

// 226. Invert Binary Tree https://leetcode.com/problems/invert-binary-tree/

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const traverse = (node) => {
    // base case
    if (!node) return null

    // traverse left and right
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)

    // if node has both left and right, swap
    let temp = node.left
    node.left = node.right
    node.right = temp
  }
  traverse(root)
  return root
}

//236. Lowest Common Ancestor of a Binary Tree https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let res
  // create helper function to traverse with DFS
  const dfs = (node) => {
    // base case
    if (!node) return false

    let left = dfs(node.left)
    let right = dfs(node.right)

    let curr = node === p || node === q

    if (left + right + curr >= 2) res = node

    return left || right || curr
  }
  dfs(root)
  return res
}

// 111. Minimum Depth of Binary Tree https://leetcode.com/problems/minimum-depth-of-binary-tree/
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
 * @return {number}
 */
var minDepth = function (root) {
  const traverse = (node) => {
    if (!node) return 0

    let left = traverse(node.left)
    let right = traverse(node.right)
    return 1 + (Math.min(left, right) || Math.max(left, right))
  }
  return traverse(root)
}

/**110. Balanced Binary Tree
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:


Input: root = [3,9,20,null,null,15,7]
Output: true

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
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
 var isBalanced = function(root) {
  if(!root)  return true
      
  const getHeight = (node) => {
      if(!node)  return 0
          let left = getHeight(node.left)
      let right = getHeight(node.right)
      
      if(left === -1|| right === -1) return -1
      
      if(Math.abs(left - right) > 1) return -1
      
      return Math.max(left, right) + 1
      
  }    
  return getHeight(root) !== -1
  
      
  };


/**104. Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Input: root = [3,9,20,null,null,15,7]
Output: 3

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  if(!root)  return 0
  return 1+ Math.max(maxDepth(root.left),maxDepth(root.right))    
      
  };




