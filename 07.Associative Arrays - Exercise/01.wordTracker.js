function wordTracker(arr) {
  let words = arr[0].split(" ");
  let wordsWithCnt = []
  for (let index = 0; index < words.length; index++) {
    wordsWithCnt.push({ name: words[index], cnt: Number(0) })
  }

  for (let i = 1; i < arr.length; i++) {
    for (let index = 0; index < wordsWithCnt.length; index++) {
      if (arr[i] == wordsWithCnt[index].name) {
        wordsWithCnt[index].cnt++
      }
    }
  }

  wordsWithCnt.sort((a, b) => b.cnt - a.cnt)
  for (let word of wordsWithCnt) {
    console.log(`${word.name} - ${word.cnt}`)
  }
}