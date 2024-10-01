
function secondLargestElement(ary) {
    let largest = -Number.MIN_VALUE
    let secondLargest = -Number.MIN_VALUE
    for (let i = 0; i <= ary.length - 1; i++) {
        if (ary[i] > largest) {
            secondLargest = largest
            largest = ary[i]
        } else if (ary[i] > secondLargest && ary[i] !== largest) {
            secondLargest = ary[i]

        }
    }
    return [largest, secondLargest]
}

const result = secondLargestElement([1, 2, 4, 7, 7, 5]);
console.log(result);

//o(n)