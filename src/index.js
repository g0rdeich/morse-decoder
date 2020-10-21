const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' '
};

function decode(expr) {
    let res = '';
    let phrase = [];
    let char = '';
    let letter = '';

    for (let i = 0; i < expr.length; i ++) {
        char += expr[i];
        if(i % 10 === 9) {
            if (char === '**********') {
                letter = char;
            } else {
                for (let j = 0; j < 10; j += 2) {
                    let morseLetter = '';
                    if (char[j] === '0') {
                        morseLetter += '';
                    } else if (char[j] === '1' && char [j + 1] === '0') {
                        morseLetter += '.';
                    } else if (char[j] === '1' && char [j + 1] === '1') {
                        morseLetter += '-';
                    }
                    letter += morseLetter;
                }
            }
            phrase.push(MORSE_TABLE[letter]);
            letter = '';
            char = '';
        }
    }

    res = phrase.join('');
    return res;
}

checkChar = (key) => {

}

module.exports = {
    decode
}