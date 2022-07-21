const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(data) {
  const countTenGroup = data.length / 10;
  let resultStr = '';
  let arr = data.split('');
  for (let i = 0; i < countTenGroup; i++) {
    let morseStr = '';
    let ten = arr.splice(0, 10);
    if (JSON.stringify(ten) !== JSON.stringify(Array(10).fill('*'))) {
      let indexOne = ten.indexOf('1');
      ten = ten.splice(indexOne);
      const countTwoGroup = ten.length / 2;
      for (let j = 0; j < countTwoGroup; j++) {
        let el = ten.splice(0, 2).join('');
        el === '10' ? (morseStr += '.') : (morseStr += '-');
      }
      resultStr += Object.entries(MORSE_TABLE)
        .filter((letterArr) => letterArr[0] === morseStr)
        .flat()[1];
    } else resultStr += ' ';
  }
  return resultStr;
}

module.exports = {
  decode,
};
