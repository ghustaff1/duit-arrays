function duplicateZeros(arr) {
  const n = arr.length;
  let countZeros = 0;

  // Перший прохід: підрахунок нулів
  for (let i = 0; i < n; i++) {
      if (arr[i] === 0) {
          countZeros++;
      }
  }

  // Другий прохід: дублюємо нулі з правого кінця
  for (let i = n - 1, j = n + countZeros - 1; i >= 0; i--) {
      if (j < n) {
          arr[j] = arr[i];
      }
      if (arr[i] === 0) {
          j--;
          if (j < n) {
              arr[j] = 0; // Дублюємо нуль
          }
      }
      j--;
  }

  return arr;
}

// Приклади
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])); // Виведе [1, 0, 0, 2, 3, 0, 0, 4]
console.log(duplicateZeros([1, 2, 3])); // Виведе [1, 2, 3]
