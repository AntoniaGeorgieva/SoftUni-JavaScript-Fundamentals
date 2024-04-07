function revealWords(givenWords, givenTemplates) {
  let words = givenWords.split(', ');
  let templates = givenTemplates.split(' ');

  for (let i = 0; i < templates.length; i++) {
    if (templates[i].includes('*')) {
      for (let word of words) {
        if (word.length == templates[i].length) {
          let idx = templates.indexOf(templates[i]);
          templates.splice(idx, 1, word)
        }
      }
    }
  }
  console.log(templates.join(' '));
}