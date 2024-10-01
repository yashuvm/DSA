//1^3 + 5^3 + 3^3 = 153


function checkArmStrong(digit) {
    let x = digit
    let count = 0;
    while (x > 0) {
        x = parseInt(x / 10)
        count++
    }
    /////
    let n = digit
    let armStrongNumber = 0
    while (n > 0) {
        let x = n % 10
        let value = 1
        for (let i = 1; i <= count; i++) {
            value = value * x
        }
        armStrongNumber += value
        n = parseInt(n / 10)
    }
    return armStrongNumber


}


const result = checkArmStrong(21897142587612075)
console.log(result)