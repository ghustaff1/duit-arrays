function checkIfExist(arr) {
  const numSet = new Set();

  for (let num of arr) {
      // Перевірка для num / 2, щоб уникнути ділення на 0
      if (numSet.has(num / 2) || numSet.has(num * 2)) {
          return true;
      }
      numSet.add(num);
  }

  return false;
}

// Приклади
console.log(checkIfExist([10, 2, 5, 3])); // Виведе true
console.log(checkIfExist([3, 1, 7, 11])); // Виведе false
