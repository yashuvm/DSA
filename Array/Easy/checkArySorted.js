
function checkArySorted(ary) {
    let flag = true
    for (let i = 1; i <= ary.length - 1; i++) {
        if (ary[i] < ary[i - 1]) {
            flag = false
        }
    }
    return flag
}

const result = checkArySorted([1, 2, 3, 55, 6]);
console.log(result);

//o(n)