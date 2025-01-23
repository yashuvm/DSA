
function kadansAlgorithm(ary) {
    let sum = 0;
    let maxi = ary[0]
    for (let value of ary) {
        sum += value
        maxi = max(sum, maxi)
        if (sum < 0) sum = 0
    }
    return maxi
}


function max(a, b) {
    if (a > b) return a
    return b
}


const result = kadansAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
//const result = kadansAlgorithm([1]);
console.log(result);

//o(n)
//Kadane’s Algorithm : Maximum Subarray Sum in an Array


//
//for solving the kadans algorithm we have to find all subary then get which sybary sum is maximum o(n^3)
//for using two loop take sum and maxi then check sum largest o(n^2)
//

