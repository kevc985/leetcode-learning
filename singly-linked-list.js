//class
// blueprint for creating objects with pre-defined properties and methods

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName
    this.lastName = lastName
    this.grade = year
    this.tardies = 0
    this.scores = []
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName} `
  }
  markLate() {
    this.tardies += 1
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
  }
  addScore(score) {
    this.scores.push(score)
    return this.scores
  }

  calculateAverage() {
    let sum = this.scores.reduce((a, b) => {
      return a + b
    })
    return sum / this.scores.length
  }

  // class methods
  // static methods defines properties of a class, they are called on the class itself, used as utility functions
  static EnrollStudents() {
    return "ENROLLING STUDENTS!"
  }
}
let firstStudent = new Student("Kevin", "Chen", 3)
let secondStudent = new Student("Crystal", "Chiam", 4)

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  static distance(a, b) {
    const dx = a.x - b.x
    const dy = a.y - b.y

    return Math.hypot(dx, dy)
  }
}
const p1 = new Point(5, 5)
const p2 = new Point(10, 10)

// Linked List

// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  // push
  push(val) {
    var newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  // traverse
  traverse() {
    var current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
  // pop
  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  shift() {
    if (!this.head) return undefined
    let currentHead = this.head
    this.head = this.head.next
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return currentHead
  }
  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null
    } else {
      let i = 0
      let current = this.head
      while (i !== index) {
        current = current.next
        i++
      }
      return current
    }
  }
  set(val, index) {
    let foundNode = this.get(index)

    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }

  insert(val, index) {
    switch (true) {
      case index < 0:
        return false
      case index === 0:
        this.unshift(val)
        return true
      case index > this.length:
        return false
      case index === this.length:
        this.push(val)
        return true
      default:
        let newNode = new Node(val)
        let prevHead = this.get(index - 1)
        let temp = prevHead.next
        prevHead.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined
    }
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    let previousNode = this.get(index - 1)
    let removed = previousNode.next
    previousNode.next = removed.next
    this.length--
    return removed
  }

  print() {
    var arr = []
    var current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }

  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    // will be the next item
    let next

    // to reference previous item, start at null
    let prev = null
    while (node) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    // [ 1,2,3,4]
    return this
  }
}

let list = new SinglyLinkedList()
list.push("1")
list.push("2")
list.push("3")
list.push("4")

list.reverse()
// console.log(list.shift())
list.print()

//leetcode problems

// 21. Merge Two Sorted Lists https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // initialise merged singly linked list
  let mergedList = new ListNode(-1, null)
  console.log(mergedList)
  // let current = mergedList
  let current = mergedList

  // while both list nodes exist, iterate over them
  while (l1 && l2) {
    // add lower
    if (l1.val > l2.val) {
      current.next = l2
      l2 = l2.next
    } else {
      current.next = l1
      l1 = l1.next
    }
    // move to next item in mergedList
    current = current.next
  }

  if (!l1 || !l2) {
    current.next = l1 || l2
  }
  return mergedList.next
}

// 33. Search in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  let min = 0
  let max = nums.length - 1
  let mid
  while (min <= max) {
    mid = Math.floor((min + max) / 2)
    if (nums[mid] == target) {
      return mid
    }

    if (nums[mid] <= nums[max]) {
      // right sorted
      if (nums[mid] < target && target <= nums[max]) {
        // bring min up to mid as target within range of right sorted
        min = mid + 1
      } else {
        max = mid - 1
      }
    } else {
      // left sorted

      if (nums[min] <= target && target < nums[mid]) {
        // bring max down to mid as target within range of left sorted
        max = mid - 1
      } else {
        min = mid + 1
      }
    }
  }
  return -1
}

// https://leetcode.com/problems/middle-of-the-linked-list/
// 876. Middle of the Linked List
// REDO AND OPTIMISE WITH FAST AND SLOW POINTER
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function (head) {
  let current = head
  let next
  let length = 0
  while (current) {
    next = current.next
    current = next
    length++
  }
  let middle = Math.floor(length / 2)
  current = head
  for (let i = 0; i < middle; i++) {
    next = current.next
    current = next
  }
  return current
}
