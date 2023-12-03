const mecenasList = require('./mecenas.json')

const mecenasKiller = (mecenas, mecenaDead = 0) => {
    if (mecenas.length == 1) {
        console.log(
            `submit ${mecenas[0]}-${mecenasList.lastIndexOf(mecenas[0])}`
        )
        return
    }
    mecenaDead = (mecenaDead + 1) % mecenas.length
    if (mecenaDead > -1) {
        mecenas.splice(mecenaDead, 1)
    }
    mecenasKiller(mecenas, mecenaDead)
}

mecenasKiller([...mecenasList])
