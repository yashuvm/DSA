function maxConcutiveOne(ary) {
    let count = 0
    let maxCount = 0;
    for (let i = 0; i <= ary.length - 1; i++) {
        if (ary[i] === 1) {
            count++
        }
        if (count > maxCount) {
            maxCount = count
        }
        if (ary[i] === 0) {
            count = 0
        }
    }
    return maxCount
}

const result = maxConcutiveOne([1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1]);
console.log(result);

//o(n)
