//Approach 1 

function SumNumber(ary, sum) {
    for (let i = 0; i <= ary.length - 1; i++) {
        for (let j = i + 1; j <= ary.length - 1; j++) {
            for (let k = j + 1; k <= ary.length - 1; k++) {
                const sumOfNumber = ary[i] + ary[j] + ary[k]
                if (sumOfNumber === sum) {
                    return `${ary[i]}_${ary[j]}_${ary[k]}`
                }
            }
        }
    }
}

//o(n^3)


//Approach 2
// function SumNumber(ary, sum) {
//     for (let i = 0; i <= ary.length - 1; i++) {
//         const s = new Set()
//         // Calculate the current sum needed to reach the target sum
//         const currSum = sum - ary[i]
//         for (let j = i + 1; j <= ary.length - 1; j++) {
//             // Calculate the required value for the second element
//             const requiredValue = currSum - ary[j]
//             if (s.has(requiredValue)) {
//                 console.log(`${ary[i]}_${ary[j]}_${requiredValue}`)
//                 return true
//             }
//             s.add(ary[j])
//         }

//     }
//     return false
// }






// const result = SumNumber([1, 4, 45, 6, 10, 8], 22);
// console.log(result);