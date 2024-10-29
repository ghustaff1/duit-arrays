function sortArrayByParity(nums) {
  const even = [];
  const odd = [];

  // Розділяємо парні та непарні числа
  for (const num of nums) {
      if (num % 2 === 0) {
          even.push(num);
      } else {
          odd.push(num);
      }
  }

  // Повертаємо новий масив, об'єднавши парні та непарні числа
  return [...even, ...odd];
}

// Приклади
console.log(sortArrayByParity([3, 1, 2, 4])); // Виведе [2, 4, 3, 1] або інший прийнятний варіант
console.log(sortArrayByParity([0])); // Виведе [0]
