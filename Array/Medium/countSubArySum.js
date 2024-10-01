//Approach 1 

// function countSubarySum(ary, sum) {
//     let ary_ = []
//     for (let i = 0; i <= ary.length - 1; i++) {
//         for (let j = i; j <= ary.length - 1; j++) {
//             let subAry = []
//             for (let k = i; k <= j; k++) {
//                 subAry.push(ary[k])
//             }
//             ary_.push(subAry)
//         }

//     }
//     let count = 0
//     for (let value of ary_) {
//         let subCount = 0
//         for (let value_ of value) {
//             subCount += value_
//         }
//         if (subCount === sum) {
//             count++
//         }
//     }
//     return count
// }
// //o(n^3)
    // const result = countSubarySum([3, 1, 2, 4], 6);
    // console.log(result)

// //Approach 2
// function countSubarySum(ary, sum) {
//     let count = 0
//     for (let i = 0; i <= ary.length - 1; i++) {
//         let sum_ = 0
//         for (let j = i; j <= ary.length - 1; j++) {
//             sum_ += ary[j]
//             if (sum_ === sum) count++
//             //if (sum_ <= 0) sum = 0
//         }

//     }

//     return count
// }
// //o(n^2)
// const result = countSubarySum([3, 1, 2, 4], 6);
// console.log(result)

//Approach 3
function countSubarySum(ary, sum) {
    let count = 0
    let sum_ = 0
    for (let i = 0; i <= ary.length - 1; i++) {
        sum_ += ary[i]
        if (sum_ === sum) count++
        if (sum_ <= 0) sum_ = 0
    }

    return count
}
//o(n^2)
 