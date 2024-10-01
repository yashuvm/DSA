function checkDuplicateChar(st) {
    let map = {}
    for (let value of st) {
        if (map[value] === undefined) map[value] = 1
        else {
            map[value] = map[value] + 1
        }
    }
    //now iterate on the map and get only those charater which have duplicate value 
    for (let i in map) {
        if (map[i] > 1) {
            console.log(`${i} coutn are : ${map[i]}`)
            //print duplicate character
        }
    }
    return true

}

const result = checkDuplicateChar('geeksforgeeks')
console.log(result)

//o(n)