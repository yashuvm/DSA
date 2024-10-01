//In the bubble sort every pass we get maximum number and put into the right place  o(n^2)

function bubbleSort(ary) {
    for (let i = ary.length - 1; i >= 0; i--) {
        let maxIndex = i
        for (let j = i - 1; j >= 0; j--) {
            if (ary[j] > ary[maxIndex]) {
                maxIndex = j
            }
        }
        //swap 
        const tmp = ary[maxIndex]
        ary[maxIndex] = ary[i]
        ary[i] = tmp
    }
    return ary
}

const result = bubbleSort([5, 4, 3, 2, 1]);
console.log(result);
