
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