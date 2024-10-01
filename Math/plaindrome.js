function checkPlaindrome(digit) {
    let n = digit
    let reverse = 0;
    while (n > 0) {
        const getReverseNum = n % 10
        reverse = reverse * 10 + getReverseNum
        n = parseInt(n / 10)
    }
    if (digit === reverse) return 'Plaindrome'
    return 'Not plaindrome'
}


const result = checkPlaindrome(121)
console.log(result)