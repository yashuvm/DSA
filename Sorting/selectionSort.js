//In selection sort select the minumun number and put it into the right place in//o(n^2)

function selectionSort(ary) {
    for (let i = 0; i <= ary.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j <= ary.length - 1; j++) {
            if (ary[j] < ary[minIndex]) {
                minIndex=j
            }
        }
        //swap 
        const tmp=ary[i]
        ary[i]=ary[minIndex]
        ary[minIndex]=tmp
    }
    return ary
}
    
const result = selectionSort([5,4,3,2,1]);
console.log(result);
