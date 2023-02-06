const encrypted = require('fs').readFileSync(
    `${__dirname}/encrypted.txt`,
    'utf8'
)

const ASCII_FOR_A = 97
const ASCII_FOR_Z = 122

const asciiChars = []
let currentAscii = ''

for (let char of encrypted) {
    if (char === ' ') {
        asciiChars.push(char)
        continue
    }

    currentAscii += char
    if (+currentAscii >= ASCII_FOR_A && +currentAscii <= ASCII_FOR_Z) {
        asciiChars.push(currentAscii)
        currentAscii = ''
    }
}

const decodedMessage = asciiChars
    .map(ascii => (ascii === ' ' ? ' ' : String.fromCharCode(ascii)))
    .join('')

console.log(`submit ${decodedMessage}`)
