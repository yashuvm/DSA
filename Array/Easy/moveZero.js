function moveZeroToEnd(ary) {
    //first get which postion of ary is 0
    let i = -1;
    for (let k = 0; k <= ary.length - 1; k++) {
        if (ary[k] === 0) {
            i = k;
            break;

        }
    }
    //now my new loop is start from i+1 -> and if 0 is coming then swap to j
    for (let j = i; j <= ary.length - 1; j++) {
        if (ary[j] !== 0) {
            //swap to i 
            const tmp = ary[i]
            ary[i] = ary[j]
            ary[j] = tmp
            j++
        }
    }
    return ary
}

const result = moveZeroToEnd([1, 2, 0, 1, 0, 4, 0]);
console.log(result);

//o(n)
