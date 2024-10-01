
function print1ToN(digit, num) {
    if (num <= digit) {
        console.log(num)
        num = num + 1
        return print1ToN(digit, num)
    }
}
const result = print1ToN(5, 1)
