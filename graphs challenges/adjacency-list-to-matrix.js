function adjacencyListToMatrix(adjList) {
  const numNodes = Object.keys(adjList).length;

  const matrix = Array.from({ length: numNodes }, () => new Array(numNodes).fill(0));

  for (const node in adjList) {
    const neighbors = adjList[node];
    
    for (const neighbor of neighbors) {
      matrix[node][neighbor] = 1;
    }
  }
for (let i = 0; i < numNodes; i++) {
    console.log(matrix[i]);
  }

  return matrix;
}

adjacencyListToMatrix({0: [1, 2], 1: [2], 2: [0, 3], 3: [2]});