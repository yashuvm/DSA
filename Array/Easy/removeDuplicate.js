const result = removeDuplicate([1, 2, 3])
console.log(result)

function removeDuplicate(ary) {
 let lowIndex=0
 for(let i=1;i<=ary.length-1;i++){
    if(ary[i]!==ary[lowIndex]){
    		ary[lowIndex+1]=ary[i]
        lowIndex++
    }
 }
 ary.length=lowIndex+1
 return ary
}


//o(n)
