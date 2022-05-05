// Hashtables

const hash = (key, arrayLens) => {
  let total = 0
  let WEIRD_PRIME = 31
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen
  }
  return total
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }
  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  set(key, value) {
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])

    return index
  }

  get(key) {
    let index = this._hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i]
        }
      }
    }
    return undefined
  }
  retrieveKeys() {
    let keyList = []

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keyList.includes(this.keyMap[i][j][0])) {
            keyList.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keyList
  }

  retrieveValues() {
    let valueList = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valueList.includes(this.keyMap[i][j][1])) {
            valueList.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valueList
  }
}

let ht = new HashTable(4)
ht.set("1", "123")
ht.set("2", "wor23ld")
ht.set("3", "wor23ld")
ht.set("4", "wor23ld")
ht.set("5", "wor23ld")
ht.set("6", "world")
ht.set("7", "world3")
ht.set("8", "world")

console.log(ht.retrieveKeys())
