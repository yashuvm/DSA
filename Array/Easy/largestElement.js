
function largestElement(ary) {
    let maxElement = 0
    for (let i = 0; i <= ary.length - 1; i++) {
        if(ary[i] > ary[maxElement]){
            maxElement=i
        }
    }
    return ary[maxElement]

}

const result = largestElement([5, 4, 3, 2, 1]);
console.log(result);

//o(n)