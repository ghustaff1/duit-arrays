function sortedSquares(nums) {
  return nums.map(num => num * num).sort((a, b) => a - b);
}

// Приклади
console.log(sortedSquares([-4, -1, 0, 3, 10])); // Виведе [0, 1, 9, 16, 100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // Виведе [4, 9, 9, 49, 121]
