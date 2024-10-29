function findMaxConsecutiveOnes(nums) {
  let maxCount = 0;
  let currentCount = 0;

  for (let num of nums) {
      if (num === 1) {
          currentCount++;
          maxCount = Math.max(maxCount, currentCount);
      } else {
          currentCount = 0;
      }
  }

  return maxCount;
}

// Приклади
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Виведе 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Виведе 2
