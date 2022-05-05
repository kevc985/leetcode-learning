class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = []
  }
  addEdge(key1, key2) {
    if (this.adjacencyList[key1]) {
      this.adjacencyList[key1].push(key2)
    }
    if (this.adjacencyList[key2]) {
      this.adjacencyList[key2].push(key1)
    }
  }
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2)
    }
    if (this.adjacencyList[v2]) {
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1)
      // for (let i = 0; i < this.adjacencyList[v2].length; i++) {
      //   if (this.adjacencyList[v2][i] === v1) {
      //     this.adjacencyList[v2].splice(i, 1)
      //   }
      // }
    }
  }

  removeVertex(v1) {
    while (this.adjacencyList[v1].length) {
      const v2 = this.adjacencyList[v1].pop()
      this.removeEdge(v1, v2)
    }
    delete this.adjacencyList[v1]
  }

  depthFirstTraversal(start) {
    const visitedList = {}
    const traversalList = []
    const adjacencyList = this.adjacencyList
    const dfs = (vertex) => {
      // base case
      if (!vertex) {
        return null
      }
      visitedList[vertex] = true
      traversalList.push(vertex)
      console.log(adjacencyList[vertex].length)
      for (let i = 0; i < adjacencyList[vertex].length; i++) {
        if (!visitedList[adjacencyList[vertex][i]]) {
          return dfs(adjacencyList[vertex][i])
        }
      }
      // adjacencyList[vertex].forEach((neighbor) => {
      //   if (!visitedList[neighbor]) {
      //     return dfs(neighbor)
      //   }
      // })
    }
    dfs(start)
    return traversalList
  }

  depthFirstTraversalIterative(start) {
    const stack = [start]
    const visitedList = {}
    visitedList[start] = true
    const traversalList = [start]
    const adjacencyList = this.adjacencyList
    console.log(visitedList)
    while (stack.length > 0) {
      adjacencyList[stack.pop()].forEach((neighbor) => {
        if (!visitedList[neighbor]) {
          stack.push(neighbor)
          traversalList.push(neighbor)
          visitedList[neighbor] = true
        }
      })
    }
    return traversalList
  }

  breadthFirstSearch(start) {
    const queue = [start]
    const visitedList = {}
    visitedList[start] = true
    const traversalList = [start]
    const adjacencyList = this.adjacencyList
    console.log(visitedList)
    while (queue.length > 0) {
      adjacencyList[queue.shift()].forEach((neighbor) => {
        if (!visitedList[neighbor]) {
          queue.push(neighbor)
          traversalList.push(neighbor)
          visitedList[neighbor] = true
        }
      })
    }
    return traversalList
  }
}

let g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
console.log(g)
console.log(g.depthFirstTraversal("A"))

// 997. Find the Town Judge https://leetcode.com/problems/find-the-town-judge/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  // create array with n + 1 , as everyone will be represented on the array as their index
  const trustScore = new Array(n + 1).fill(0)
  for (let [i, j] of trust) {
    //allocate trust scores to j index of trustScore array.
    trustScore[i] -= 1
    trustScore[j] += 1
  }
  // If J === n-1, that is town judge, iterate over the array of trustScores
  for (let k = 1; k <= n; i++) {
    if (n - 1 === trustScore[k]) {
      return k
    }
  }
  return -1
}
