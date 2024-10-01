
function plaindrome(char) {
    let charNew = char
    let startIndex = 0;
    let endIndex = charNew.length - 1
    while (startIndex < endIndex) {
        const tmp = charNew[startIndex]
        charNew[startIndex] = charNew[endIndex]
        charNew[endIndex] = tmp
        startIndex++;
        endIndex--
    }
    return charNew
    //console.log(charNew)
    // if (char === charNew) return 'Plaindrome'
    // return 'Not plaindrome'

}
const result = plaindrome('ABC')
console.log(result)
