function missingNumberAry(ary, n) {
    let a = 0
    for (let i = 1; i <= n - 1; i++) {
        a = a ^ ary[i]
    }
    return a
}

const result = missingNumberAry([1, 2, 4, 5], 5);
console.log(result);

//o(n)

