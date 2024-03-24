function oddOccurrences(sentence)
{
  let splitSentence = sentence.split(" ");
  let lowerArr = [];
  for (let word of splitSentence) {
    lowerArr.push(word.toLowerCase());
   }

  let wordMatch = {};

  for (let word of lowerArr) {
    if(word in wordMatch) {
      wordMatch[word]++;
    } else {
      wordMatch[word] = 1;
    }
  }

  let wordMatchArr = Object.entries(wordMatch).sort((a, b) => b[1] - a[1]);

  let finalArr = [];
  for(let entrey of wordMatchArr) {
    if(entrey[1] % 2 == 1) {
      finalArr.push(entrey[0])
    }
  }
  console.log(finalArr.join(" "));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')