//Given a number, check whether it is prime or not. A prime number is a natural number that is only divisible by 1 and by itself.
function checkPrime(num) {
    if (num === 1) {
        return 'Prime'
    }
    let primeNum = num
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            primeNum = i
        }
        if (primeNum !== num) return 'Not Prime'
    }
    return 'Prime'

}


const result = checkPrime(7)
console.log(result)