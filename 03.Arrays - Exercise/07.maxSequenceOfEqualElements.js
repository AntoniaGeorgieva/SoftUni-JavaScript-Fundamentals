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