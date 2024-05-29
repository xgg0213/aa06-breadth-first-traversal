/*
Write a function called printBreadthFirst that will traverse the given graph
breadth-first, printing each node when visited exactly once, on a newline.
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

// Create a queue and enqueue the starting node
// Create a set to store visited nodes
// While the queue is not empty, repeat steps 4-6
// Dequeue the first node
// DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
// For each unvisited neighbor, add it to the visited nodes and to the back of the queue

function printBreadthFirst(start) {
  // Your code here 
  let queue = [start];
  let visited = new Set();

  while (queue.length) {
    let el = queue.shift();
    if (!visited.has(el)) {
      console.log(el);
      visited.add(el);
    }
    for (let i = 0; i < adjList[el].length; i++) {
      if (!visited.has(adjList[el][i])) queue.push(adjList[el][i])
    }
    
  }

}

console.log("First Test:")
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                      // One possible solution:  3, 2, 4, 1, 5, 6
console.log("Second Test:")
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                      // One possible solution:  6, 4, 3, 5, 2, 1
console.log("Third Test:")
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                      // One possible solution:  4, 3, 5, 6, 2, 1


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = printBreadthFirst;
