function maxIslandSize(grid) {
  // Todo
}

function minIslandSize(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let smallestSize = Infinity;

  function exploreSize(r, c) {
    const position = r + "," + c;
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === "W" ||
      visited.has(position)
    ) {
      return 0;
    }

    visited.add(position);
    let size = 1;

    size += exploreSize(r + 1, c);
    size += exploreSize(r - 1, c);
    size += exploreSize(r, c + 1);
    size += exploreSize(r, c - 1);

    return size;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "L" && !visited.has(r + "," + c)) {
        const size = exploreSize(r, c);
        if (size < smallestSize) {
          smallestSize = size;
        }
      }
    }
  }
}
