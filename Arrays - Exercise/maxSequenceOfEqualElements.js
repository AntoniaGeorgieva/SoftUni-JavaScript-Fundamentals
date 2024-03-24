function maxSequenceOfEqualElements(arr) {

  let currentNum = arr[0];
  let currentStreak = 1;
  let longestStreak = 1;
  let longestStreakStart = 0;

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] === currentNum) {
          currentStreak++;
          if (currentStreak > longestStreak) {
              longestStreak = currentStreak;
              longestStreakStart = i - longestStreak + 1;
          }
      } else {
          currentNum = arr[i];
          currentStreak = 1;
      }
  }

  console.log(arr
              .slice(longestStreakStart, longestStreakStart + longestStreak)
              .join(" "));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfEqualElements([4, 4, 4, 4])
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])
