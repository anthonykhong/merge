function sortFivesToEnd(array) {
  const result = [];
  let fivesCount = 0;

  // Iterate through the array and separate fives and non-fives
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 5) {
      result.push(array[i]);
    } else {
      fivesCount++;
    }
  }

  // Add the fives to the end of the result array
  for (let i = 0; i < fivesCount; i++) {
    result.push(5);
  }

  return result;
}

// Example usage
// const unsortedArray = [4, 5, 6, 7, 8, 4, 3, 2, 45, 5, 3, 5, 5, 5, 3, 2, 1];
// const sortedArray = sortFivesToEnd(unsortedArray);
// console.log(sortedArray); // [4, 6, 7, 8, 4, 3, 2, 45, 3, 2, 1, 5, 5, 5, 5, 5, 3]

function sortFivesToEnd(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    while (left < right && array[left] !== 5) {
      left++;
    }

    while (left < right && array[right] === 5) {
      right--;
    }

    if (left < right) {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
    }
  }

  return array;
}

const unsortedArray = [4, 5, 6, 7, 8, 4, 3, 2, 45, 5, 3, 5, 5, 5, 3, 2, 1];
const sortedArray = sortFivesToEnd(unsortedArray);
console.log(sortedArray);
