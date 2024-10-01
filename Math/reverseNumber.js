function reverseNumber(digit) {
    let x = digit
    let reverse = 0
    let n = digit
    while (n > 0) {
        x = (x % 10);
        reverse = reverse * 10 + x
        n = parseInt(n / 10)
        x = n
    }
    return reverse
}


const result = reverseNumber(12345)
console.log(result)