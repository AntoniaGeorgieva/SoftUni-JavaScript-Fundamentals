function wordTracker(arr)
{
  let words = arr[0].split(" ");
  let wordsWithCnt = {};

  for (let word of words) {
    wordsWithCnt[word] = 0;
  }
  
  for(let word of arr) {
    if(word in wordsWithCnt) {
      wordsWithCnt[word]++;
    }
  }

  let wordsArr = Object.entries(wordsWithCnt).sort((a, b) => b[1] - a[1]);
  
  for (let word of wordsArr) {
    console.log(`${word[0]} - ${word[1]}`)
  }
}

wordTracker([
  'is the',
  'first', 'sentence', 'Here', 'is', 
  'another', 'the', 'And', 'finally', 'the', 
  'the', 'sentence']
  )