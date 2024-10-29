function replaceElements(arr) {
  const n = arr.length;
  if (n === 0) return arr; // У разі порожнього масиву

  let maxFromRight = -1; // Ініціалізація найбільшого з правого боку

  // Проходимо масив з кінця до початку
  for (let i = n - 1; i >= 0; i--) {
      const current = arr[i];
      arr[i] = maxFromRight; // Замінюємо на найбільший з правого боку
      maxFromRight = Math.max(maxFromRight, current); // Оновлюємо maxFromRight
  }

  return arr; // Повертаємо результат
}

// Приклади
console.log(replaceElements([17, 18, 5, 4, 6, 1])); // Виведе [18, 6, 6, 6, 1, -1]
console.log(replaceElements([400])); // Виведе [-1]
