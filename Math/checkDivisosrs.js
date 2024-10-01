//Given a number, check whether it is prime or not. A prime number is a natural number that is only divisible by 1 and by itself.
function checkPrime(num) {
    let ary = []
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            ary.push(i)
        }
    }
    return ary
}


const result = checkPrime(36)
console.log(result)