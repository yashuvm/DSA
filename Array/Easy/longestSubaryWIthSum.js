//approach_1
// function longestSubAryWithSum(ary) {
//     //brutest force approach
//     let subAry = []
//     for (let i = 0; i <= ary.length - 1; i++) {
//         for (let j = i; j <= ary.length - 1; j++) {
//             let sum=[]
//             for (let k = i; k <= j; k++) {
//                 sum.push(ary[k])
//             }
//             subAry.push(sum) 
//         }
//     }
//     return subAry
// }
//o(n^3)

// const result = longestSubAryWithSum([-1, 1, 1], 1);
// console.log(result);

//approach_2
// function longestSubAryWithSum(ary, k) {
//     //brutest force approach
//     let lenth = 0
//     for (let i = 0; i <= ary.length - 1; i++) {
//         for (let j = i; j <= ary.length - 1; j++) {
//             let sum = 0
//             for (let k = i; k <= j; k++) {
//                 sum += ary[k]
//             }
//             if (sum === k) lenth = max(lenth, j - i + 1)
//         }
//     }
//     return lenth
// }

// function max(a, b) {
//     if (a > b) return a
//     return b
// }
//o(n^3)

// //approach_3
// function longestSubAryWithSum(ary, k) {
//     //brutest force approach
//     let lenth = 0
//     for (let i = 0; i <= ary.length - 1; i++) {
//         let sum = 0
//         for (let j = i; j <= ary.length - 1; j++) {
//             sum += ary[j]
//             if (sum === k) lenth = max(lenth, j - i + 1)
//         }
//     }
//     return lenth
// }

// function max(a, b) {
//     if (a > b) return a
//     return b
// }
// //o(n^2)

//approach_4 hashmap approach
function longestSubAryWithSum(ary, k) {
    let map = {}
    let sum = 0;
    let maxLength = 0
    for (let i = 0; i <= ary.length - 1; i++) {
        sum += ary[i]
        if (sum === k) {
            maxLength = max(maxLength, i + 1)
        }
        let remaining = sum - k
        if (map[remaining] !== undefined) {
            let len = i - map[remaining]
            maxLength = max(maxLength, len)
        } else {
            map[sum] = i

        }


    }
    return maxLength
}


function max(a, b) {
    if (a > b) return a
    return b
}

const result = longestSubAryWithSum([10, 5, 2, 7, 1, 9], 15);
 console.log(result);




////////////////////////////////////////////////
const result = longestSubAryWithSum([10, -10, 20, 30], 5);
console.log(result);


function longestSubAryWithSum(ary, num) {
    let longestLength = 0
    const subAry = []
    for (let i = 0; i <= ary.length - 1; i++) {
        for (let j = i; j <= ary.length - 1; j++) {
            let newSubAry = []
            for (let k = i; k <= j; k++) {
                newSubAry.push(ary[k])
            }
            subAry.push(newSubAry)
        }
    }
    //

    for (let value of subAry) {
        let sum_ = 0
        for (let value2 of value) {
            sum_ += value2
        }
        if (sum_ === num) {
            if (value.length > longestLength) {
                longestLength = value.length
            }
        }
    }


    if (longestLength === 0) {
        console.log('No subarray')
    } else {
        console.log(longestLength)

    }


    //
}








