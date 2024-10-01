// // function maxProduct(ary) {
// //     let maxiSubAry = []
// //     for (let i = 0; i <= ary.length - 1; i++) {
// //         for (let j = i; j <= ary.length - 1; j++) {
// //             let subAry = []
// //             for (let k = i; k <= j; k++) {
// //                 subAry.push(ary[k])
// //             }
// //             maxiSubAry.push(subAry)
// //         }
// //     }

// //     //find max product
// //     let maxiProduct = -Infinity
// //     for (let value of maxiSubAry) {
// //         let product = 1
// //         for (let value2 of value) {
// //             product = product * value2
// //         }
// //         if (product > maxiProduct) maxiProduct = product
// //     }

// //     return maxiProduct
// // }

// // console.log(maxProduct([1, 2, -3, 0, -4, -5]))
// // //o(n^3)

// console.log(maxProduct([1, 2, 3, 4, 5, 0]));
// function maxProduct(ary) {
//     let result = ary[0]
//     for (let i = 0; i <= ary.length - 1; i++) {
//         let p = ary[i]
//         for (let j = i + 1; j <= ary.length - 1; j++) {
//             result = max(result, p)
//             p = p * ary[j]
//         }
//         result = max(result, p)
//     }

//     function max(a, b) {
//         if (a > b) return a
//         return b
//     }

//     //
//     return result;
// }
// //o(n^2)

// console.log(maxProduct([1, 2, 3, 4, 5, 0]));
// function maxProduct(ary) {
//     let result = ary[0]
//     let prod1 = ary[0]
//     let prod2 = ary[0]
//     for (let value of ary) {
//         let tmp = max(value, prod1 * value, prod2 * value)
//         prod2 = min(value, prod1 * value, prod2 * value)
//         prod1 = tmp
//         result = maxi(prod1, result)
//     }

//     return result

//     function maxi(a, b) {
//         if (a > b) return a
//         return b
//     }

//     function max(a, b, c) {
//         let max = a
//         if (b > max) {
//             max = b
//         }
//         if (c > max) {
//             max = c
//         }
//         return max
//     }

//     function min(a, b, c) {
//         let minEl = a
//         if (b < minEl) {
//             minEl = b
//         }
//         if (c < minEl) {
//             minEl = c
//         }
//         return minEl
//     }
// }

// //o(n)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Approah 1
// function maxProductSubAry(ary) {
//     let subAry = []
//     for (let i = 0; i <= ary.length - 1; i++) {
//         for (let j = i; j <= ary.length - 1; j++) {
//             let shortSubAry = []
//             for (let k = i; k <= j; k++) {
//                 shortSubAry.push(ary[k])
//             }
//             subAry.push(shortSubAry)
//         }
//     }
//     //iterate on each ary of subary and find max element
//     let maxSubProduct = 1
//     for (let value of subAry) {
//         let product = 1
//         for (let value1 of value) {
//             product = product * value1
//         }
//         if(product > maxSubProduct) maxSubProduct=product
//     }
//     return maxSubProduct

// }
// const result = maxProductSubAry([1,2,-3,0,-4,-5])   //1,2,-3,0,-4,-5
// console.log(result)
//o(n^3)

///////////////////////////////
//Approach 2
// const result = maxProductSubAry([1, 2, -3, 0, -4, -5])   //1,2,-3,0,-4,-5
// console.log(result)

// function maxProductSubAry(ary) {
//     let maxProduct = Number.MIN_SAFE_INTEGER
//     for (let i = 0; i <= ary.length - 1; i++) {
//         for (let j = i ; j <= ary.length - 1; j++) {
//             let subAryProduct = 1
//             for (let k = i; k <= j; k++) {
//                 subAryProduct = subAryProduct * ary[k]
//             }
//             if (subAryProduct > maxProduct) maxProduct = subAryProduct
//         }

//     }
//     return maxProduct
// }

//o(n^3)

//////////////////////////////////////////////
//Apporach 3
// const result = maxProductSubAry([1, 2, -3, 0, -4, -5]); //1,2,-3,0,-4,-5
// console.log(result);

// function maxProductSubAry(ary) {
//   let maxProduct = Number.MIN_SAFE_INTEGER;

//   for (let i = 0; i <= ary.length - 1; i++) {
//     let product = 1;
//     for (let j = i; j <= ary.length - 1; j++) {
//       product = product * ary[j];
//       if (product > maxProduct) maxProduct = product;
//     }
//   }

//   return maxProduct;
// }
//o(n^2)

//////////////////////////////////////////////
//Apporach 4
// const result = maxProductSubAry([1,2,3,4,5,0]); //1,2,-3,0,-4,-5
// console.log(result);
// //all are postive number
// //if even negative
// //if odd negative
// //if 0
// function maxProductSubAry(ary) {
//     let prefix = 1
//     let suffix = 1
//     let maxi = Number.MIN_SAFE_INTEGER
//     for (let i = 0; i <= ary.length - 1; i++) {
//         if (prefix === 0) prefix = 1
//         if (suffix === 0) suffix = 1
//         prefix = prefix * ary[i]
//         suffix = suffix + ary[ary.length - i - 1]
//         maxi = max(maxi, max(prefix, suffix))

//     }

//     function max(a, b) {
//         if (a > b) return a
//         return b
//     }

//     return maxi
// }

//o(n)
////////////////////////////////////////
// Approach 5
const result = maxProductSubAry([`1, 2, 3, 4, 5, 0`]); //1,2,-3,0,-4,-5
console.log(result);

//kadans algorithm
function maxProductSubAry(ary) {
  let maxiProduct = Number.MIN_SAFE_INTEGER;
  let product = 1;
  for (let value of ary) {
    product = product * value;
    if (product > maxiProduct) maxiProduct = product;
    if (value === 0) product = 1;
  }

  return maxiProduct;
}
