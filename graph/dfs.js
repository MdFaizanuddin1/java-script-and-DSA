const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function dfsIterative(graph, startP) {
  const stack = [startP];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }
}

const dfsRecursive = (graph, startP, visited = new Set()) => {
  if (!visited.has(startP)) {
    visited.add(startP);
    for (const neighbour of graph[startP]) {
      dfsRecursive(graph, neighbour, visited);
    }
  }
};
