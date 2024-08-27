const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

//using dfs
function hasPath(graph, start, dest) {
  const stack = [start];
  const visited = new Set();
  while (stack.length > 0) {
    const node = stack.pop();
    if (node == dest) {
      return true;
    }
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        stack.push(neighbour);
      }
    }
  }
  return false;
}

//bfs
const hasPathBFS = (graph, start, dest) => {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === dest) {
      return true;
    }
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        queue.push(neighbour);
      }
    }
  }
  return false;
};

// recursive
const hasPathRecursive = (graph, start, dest, visited = new Set()) => {
  if (start === dest) return true;

  if (visited.has(start)) return false;
  visited.add(start);

  for (const neighbour of graph[start]) {
    if (hasPathRecursive(graph, neighbour, dest)) return true;
  }
  return false;
};
