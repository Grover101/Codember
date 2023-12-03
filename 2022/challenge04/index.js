const posPasswords = []
for (let i = 11098; i <= 98123; i++) {
    const [a, b, c, d, e] = `${i}`.split('').map(Number)

    if (a > b || b > c || c > d || d > e) {
        continue
    }

    const cantFives = `${i}`.split('5').length - 1
    if (cantFives >= 2) {
        posPasswords.push(i)
    }
}

console.log(`submit ${posPasswords.length}-${posPasswords[55]}`)
