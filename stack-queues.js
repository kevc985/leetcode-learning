// array stack implementation
// pop and push is more efficient than shift and unshift for arrays
const stack = []
stack.push("google")

// stack with linked list

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// push add from start
// pop remove from start

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val) {
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNodethis.last = newNode
    } else {
      const temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    return ++this.size
  }
  pop() {
    if (!this.first) return null
    const temp = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
  }
}

// queue

// queue with array
const q = []
// unshift instead of push, so that there is no indexing when popping, better to create your own queue class
q.unshift("yo")

q.pop()

// custom queue class
// enqueue add from last
// dequeue remove from first
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  enqueue(val) {
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last = newNodethis.last.next = newNode
    }
    return ++this.size
  }
  dequeue() {
    if (!this.first) return null
    const temp = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
  }
}
