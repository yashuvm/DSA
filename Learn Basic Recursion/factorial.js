let fact = 1
function factorial(n) {
    if (n >= 1) {
        fact = fact * n
        n = n - 1
        return factorial(n)
    }
    return fact
}
const result = factorial(3)
console.log(result)
