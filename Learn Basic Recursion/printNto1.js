
function printNTo1(digit, num) {
    if (num <= digit) {
        digit = digit - 1
        return printNTo1(digit, num)
    }
}
const result = printNTo1(5, 1)
