function merge(nums1, m, nums2, n) {
  let i = m - 1; // Індекс останнього елемента в nums1
  let j = n - 1; // Індекс останнього елемента в nums2
  let k = m + n - 1; // Індекс останнього елемента в nums1 для запису

  // Об'єднуємо масиви, поки не обробимо всі елементи з nums2
  while (j >= 0) {
      if (i >= 0 && nums1[i] > nums2[j]) {
          nums1[k] = nums1[i];
          i--;
      } else {
          nums1[k] = nums2[j];
          j--;
      }
      k--;
  }
}

// Приклади
let nums1 = [1, 2, 3, 0, 0, 0];
merge(nums1, 3, [2, 5, 6], 3);
console.log(nums1); // Виведе [1, 2, 2, 3, 5, 6]

nums1 = [1];
merge(nums1, 1, [], 0);
console.log(nums1); // Виведе [1]

nums1 = [0];
merge(nums1, 0, [1], 1);
console.log(nums1); // Виведе [1]
