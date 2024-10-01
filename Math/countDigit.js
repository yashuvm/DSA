function countDigit(digit) {
    let count = 0;
    let x = digit
    while (x > 0) {
        x = parseInt(x / 10)
        count++
    }
    return count
}


const result = countDigit(12345)
console.log(result)