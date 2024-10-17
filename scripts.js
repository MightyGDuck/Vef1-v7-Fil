/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
    if (typeof str !== 'string') return null;
    if (str === '') return '';

    const words = str.split(' ');
    let longestWord = words[0];

    for(let i = 1; i < words.length; i++){
      if(words[i].length > longestWord.length){
        longestWord = words[i];
      }
    }
    return longestWord;
}

function shortest(str) {
  if (typeof str !== 'string') return null;
  if (str === '') return '';

  const words = str.split(' ');
  let shortestWord = words[0];

  for(let i = 1; i < words.length; i++){
    if(words[i].length < shortestWord.length){
      shortestWord = words[i];
    }
  }
  return shortestWord;
}

function reverse(str) {
  if (typeof str !== 'string') return null;
  if (str === '') return '';

  const reversed = str.split('').reverse().join('');

  return reversed;
}

function palindrome(str) {
  if (typeof str !== 'string') return null;
  if (str === '') return '';

  const normalStr = str.toLowerCase().replace(/\s+/g, '');
  const reversedStr = reverse(normalStr);

  return normalStr === reversedStr;

}

function vowels(str) {
  if (typeof str !== 'string') return null;
  if (str === '') return '';

  let count = 0;

  for(let i = 0; i < str.length; i++){
    if (VOWELS.includes(str[i])){
      count++;
    }
  }

  return count;
}

function consonants(str) {
  if (typeof str !== 'string') return null;
  if (str === '') return '';

  let count = 0;

  for(let i = 0; i < str.length; i++){
    if (CONSONANTS.includes(str[i])){
      count++;
    }
  }

  return count;
}

console.assert(longest('a ba a la') === 'ba', 'longest: skilar ba');
console.assert(longest('a b c d e') === 'a', 'longest: skilar a');
console.assert(shortest('a ba b la') === 'a', 'shortest: skilar a');
console.assert(shortest('ba la ba da s') === 's', 'shortest: skilar s');
console.assert(reverse('hello') === 'olleh', 'reverse: skilar olleh');
console.assert(reverse('AhhAAasd') === 'dsaAAhhA', 'reverse: skilar dsaAAhhA');
console.assert(palindrome('Hahah') === true, 'palindrome: skilar true');
console.assert(palindrome('hi') === false, 'palindrome: skilar false');
console.assert(vowels('aeioub') === 5, 'vowels: skilar 5');
console.assert(vowels('babira') === 3, 'vowels: skilar 3');
console.assert(consonants('aeioub') === 1, 'consonants: skilar 1');
console.assert(consonants('babira') === 3, 'consonants: skilar 3');


//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert('Velkominn! \nSláðu inn streng til að sjá hvað lengsta orðið, stysta orðið, orðið snúið við, talning sérhljóða, talning samhljóða eru og ef orðið er palindrome!');

  const input = prompt('Streng hér: ');
  if (input === null || input === '') return;

  const results = [
    `Lengsta orðið: ${longest(input)}`,
    `Systa orðið: ${shortest(input)}`,
    `Orðið snúið við: ${reverse(input)}`,
    `Talning sérhljóða: ${vowels(input)}`,
    `Talning samhljóða: ${consonants(input)}`,
    `Er palindrome: ${palindrome(input)}`
  ];

  alert(results.join('\n'));

  if (confirm('Viltu nota annnan orð?')) {
    start();
  }
}
