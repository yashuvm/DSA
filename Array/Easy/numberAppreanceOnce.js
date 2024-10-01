// function NumberAppreanceOne(ary) {
//     let a = 0
//     for (let value of ary) {
//         a = a ^ value
//     }
//     return a
// }

const result = NumberAppreanceOne([2, 2, 1, 3, 1, 4, 3]);
console.log(result);

//o(n)   a^a=0    a^0=a
//another method is using haspmap or object take 

function NumberAppreanceOne(ary) {
    let a = {}
    for (let value of ary) {
        if (a[value] === undefined) {
            a[value] = 1
        } else {
            a[value] = a[value] + 1
        }
    }
    //iterate the loop on objects
    for (let i in a) {
        if (a[i] === 1) {
            return i
        }
    }
    return i
}