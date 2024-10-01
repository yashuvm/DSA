
function reverseAry(ary) {
    //
    let startIndex = 0
    let endIndex = ary.length - 1
    while (startIndex < endIndex) {
        const tmp = ary[startIndex]
        ary[startIndex] = ary[endIndex]
        ary[endIndex] = tmp
        startIndex++
        endIndex--
    }
    return ary
}
const result = reverseAry([5, 4, 3, 2, 1])
console.log(result)
