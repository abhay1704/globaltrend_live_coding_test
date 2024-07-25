// dijkstra

// Define Priority Queue utitilty class for dijkstra
class priorityQueue {
  arr = [];

  push(item) {
    this.arr.push(item);
  }

  pop(item) {
    this.arr = this.arr.sort((item1, item2) => {
      return item1[0] - item2[0];
    });

    const ans = this.arr[0];
    this.arr = this.arr.slice(1, this.arr.length);
    //   console.log(this.arr);
    return ans;
  }

  empty() {
    return this.arr.length === 0;
  }
}


function dijkstra(n, src, graph) {
  // here visited array actually stores minDistance, and will be -1 if not yet visited 
  const visited = Array.from({ length: n }, (_) => {
    return -1;
  });

  const pq = new priorityQueue();
  pq.push([0, src]);


  while (!pq.empty()) {
    const [currDist, currNode] = pq.pop();
    // If currrent node is already visited continue, since priority queue cannot give better solution(lesser distance) after larger distance.
    // (shortest distance first)

    if (visited[currNode] != -1) continue;

    visited[currNode] = currDist;

    // Traverse all child nodes of that graph
    for (const child of Object.entries(graph[currNode])) {
      const [node, dist] = child;
      pq.push([currDist + dist, node]);
    }
  }

    return Object.fromEntries(visited.map((x, i) => {
        return [i, x];
  }));
}

function applyDikjstra(graph) {
    const n = Object.entries(graph).length;
    const src = 0;
    const ans = dijkstra(n, src, graph);
    return ans;
}

// Input
const graph = { 0: { 1: 4, 2: 1 }, 1: { 3: 1 }, 2: { 1: 2, 3: 5 }, 3: {} };
// Test Case 1
const ans = applyDikjstra(graph);
console.log(ans);