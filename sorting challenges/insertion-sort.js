function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i];
    let j;
    
    for (j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    
    array[j + 1] = currentVal;
  }
  return array;
}

// Test Cases
console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
console.log(insertionSort([5, 4, 33, 2, 8]));