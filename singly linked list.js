// Linked List

// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    const newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    const poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }

  shift() {
    if (this.length === 0) return undefined
    const oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }

  unshift() {
    const newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.headthis.head = newNode
    }
    this.length++
    return this
  }
}

let list = new DoublyLinkedList()
list.push(13)
list.push(12)

console.log(list.pop())
