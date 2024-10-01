
function printNName(digit) {
    if (digit > 0) {
        console.log("Hello")
        digit = digit - 1
        return printNName(digit)
    }
}
const result = printNName(5)
