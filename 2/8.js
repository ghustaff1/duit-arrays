function validMountainArray(arr) {
  const n = arr.length;

  // Перевірка на мінімальну довжину
  if (n < 3) return false;

  let i = 0;

  // Зростання: знайти підйом
  while (i < n - 1 && arr[i] < arr[i + 1]) {
      i++;
  }

  // Потрібно, щоб i не було на краях
  if (i === 0 || i === n - 1) return false;

  // Спадання: знайти спуск
  while (i < n - 1 && arr[i] > arr[i + 1]) {
      i++;
  }

  // Якщо ми дійшли до кінця масиву, це дійсний гірський масив
  return i === n - 1;
}

// Приклади
console.log(validMountainArray([2, 1])); // Виведе false
console.log(validMountainArray([3, 5, 5])); // Виведе false
console.log(validMountainArray([0, 3, 2, 1])); // Виведе true
