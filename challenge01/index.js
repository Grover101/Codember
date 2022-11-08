const users = require('fs').readFileSync('users.txt', 'utf8')

const dataRequired = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']

const validUsers = users
    .split('\n\n')
    .map(line => line.replaceAll('\n', ' ').split(' '))
    .map(dataUser => {
        const userObj = {}
        for (const item of dataUser) {
            const [key, value] = item.split(':')
            userObj[key] = value
        }
        return userObj
    })
    .filter(user => dataRequired.every(fieldName => fieldName in user))

console.log(`submit ${validUsers.length}${validUsers.at(-1).usr}`)
