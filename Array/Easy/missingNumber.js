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

const result = missingNumberAry([1, 2, 4, 5], 5);
console.log(result);


function missingNumberAry(ary,num){
  const obj={}
 for(let value of ary){
    obj[value]=true
  }
  for(let i=1;i<=num;i++){
    if(obj[i] ===undefined){
      console.log("Missing number is " + i)
    }
  }
}
//////space used and two for loop  time o(n) space o(n) 
