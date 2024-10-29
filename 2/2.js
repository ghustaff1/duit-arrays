function countNumbersWithEvenDigits(nums) {
  let count = 0;

  for (let num of nums) {
      if (num < 1 || num > 100000) {
          throw new Error("Число повинно бути в межах від 1 до 100000");
      }
      if (String(num).length % 2 === 0) {
          count++;
      }
  }

  return count;
}

// Приклади
console.log(countNumbersWithEvenDigits([12, 345, 2, 6, 7896])); // Виведе 2
console.log(countNumbersWithEvenDigits([555, 901, 482, 1771])); // Виведе 1
