const colorsArr = require('./colors.json')

let maxZebraCount = 0
let maxZebraColor = ''

let lastColor = ''
let nextColor = colorsArr[0]
let currentZebraCount = 1

for (currentColor of colorsArr) {
    if (currentColor !== nextColor || lastColor === currentColor)
        currentZebraCount = 1

    currentZebraCount++
    nextColor = lastColor
    lastColor = currentColor
    if (currentZebraCount > maxZebraCount) {
        maxZebraCount = currentZebraCount
        maxZebraColor = lastColor
    }
}

console.log('submit ' + maxZebraCount + '@' + maxZebraColor)
