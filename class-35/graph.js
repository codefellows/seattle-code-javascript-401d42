'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}


class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();  // I want a key that isn't a string, so I'm using a Map
  }

  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);

    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if(!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw Error('Invalid Vertices');
    }

    let edgesArray = this.adjacencyList.get(startVertex);
    edgesArray.push(new Edge(endVertex, weight));
  }

  getNodes() {
    return this.adjacencyList;
  }

  breadthFirst(startVertex) {
    // use a queue to track my ordering of adjacencies
    let queue = [];
    // Set of visited Nodes, to avoid cycles / duplicated nodes.
    let visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);
    while(queue.length) {
      // take from the top of the queue while the queue had Nodes.
      const current = queue.shift();
      console.log(current.value);
      // get the neighbors from the adjacency list
      const neighbors = this.getNeighbors(current);

      // iterate through the neighbors
      for (let neighbor of neighbors) {
        let neighborNode = neighbor.vertex;
        // check if neighbor is visited -> skip this iteration
        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          // if not push into visitedNodes
          visitedNodes.add(neighborNode);
          // queue neighbor node.
          queue.push(neighborNode);
        }
      }
    }

    return visitedNodes;
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      console.log(vertex);
      throw Error('Invalid Vertex', vertex);
    }

    return [...this.adjacencyList.get(vertex)];
  }
}

const graph = new Graph();

const a = graph.addVertex('A');
const b = graph.addVertex('B');
const c = graph.addVertex('C');
const d = graph.addVertex('D');
const e = graph.addVertex('E');
const f = graph.addVertex('F');
const g = graph.addVertex('G');
const h = graph.addVertex('H');


graph.addDirectedEdge(a, c);
graph.addDirectedEdge(a, b);
graph.addDirectedEdge(c, b);
graph.addDirectedEdge(b, f);
graph.addDirectedEdge(f, e);
graph.addDirectedEdge(f, h);
graph.addDirectedEdge(e, h);
graph.addDirectedEdge(c, g);

console.log(graph.adjacencyList);
console.log(graph.breadthFirst(a));
