class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    this.values.push({ val, priority })
    this.sort()
  }

  dequeue() {
    return this.values.shift()
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = []
  }
  addEdge(key1, key2, weight) {
    if (this.adjacencyList[key1]) {
      this.adjacencyList[key1].push({ node: key2, weight })
    }
    if (this.adjacencyList[key2]) {
      this.adjacencyList[key2].push({ node: key1, weight })
    }
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    const path = []
    let smallest

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
        // we are done, build path to return
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node

          let nextNode = this.adjacencyList[smallest][neighbor]
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          // updating new smallest distance to neighbor
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate
            // updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest
            // enqueue in priority queue with new neighbor
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }
    return path.concat(smallest).reverse()
  }
}

let graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1)
console.log(graph.Dijkstra("A", "E"))
