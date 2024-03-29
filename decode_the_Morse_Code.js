/*In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.


NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you as a dictionary, feel free to use it:

Coffeescript/C++/Go/JavaScript/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']

All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.
*/

const MORSE_CODE = {
  ".-" : "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "-----": "0",
  "--.": "G",
  ".----": "1",
  "....": "H", "..---": "2",
  "..": "I", "...--": "3",
  ".---": "J", "....-": "4",
  "-.-": "K", ".....": "5",
  ".-..": "L", "-....": "6",
  "--": "M", "--...": "7",
  "-.": "N", "---..": "8",
  "---": "O", "----.": "9",
  ".--.": "P", ".-.-.-": ".",
  "--.-": "Q", "--..--": ",",
  ".-.": "R", "..--..": "?",
  "...": "S",
  "-....-": "-",
  "-": "T",
  ".----.": "'",
  "..-": "U", 
  "---...": ":",
  "...-": "V", ".-..-.": "'",
  ".--": "W", "-..-.": "/",
  "-..-": "X", ".--.-.": "@",
  "-.--": "Y",
  "--..": "Z"
  };
  //console.log(MORSE_CODE)
  
  decodeMorse = morseCode =>{
    let wordsArr= morseCode.trim().split("  ");
    let wordsTranslateArr = wordsArr.map(word=> 
    word.split(" ").map(letter => MORSE_CODE[letter]))
    return wordsTranslateArr.map(word=> word.join("")).join(" ")
  }
  
  console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
  //should return "HEY JUDE"