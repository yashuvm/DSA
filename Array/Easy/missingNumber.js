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
//
const result = missingNumberAry([1, 2, 4, 5], 5);
console.log(result);


function missingNumberAry(ary,num){
   let sum=0 
   for(let i=0;i<=ary.length-1;i++){
     sum+=ary[i]
   }
   let expressinSum=num*(num+1)/2 
   //// Calculate the expected sum ->let expSum = (n * (n + 1)) / 2;
   let missingEl=expressinSum-sum
   return missingEl
}
//o(n)

function missingNum(arr) {
    const n = arr.length + 1;
    let xor1 = 0, xor2 = 0;

    // XOR all array elements
    for (let i = 0; i < n - 1; i++) {
        xor2 ^= arr[i];
    }

    // XOR all numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        xor1 ^= i;
    }

    // Missing number is the XOR of xor1 and xor2
    return xor1 ^ xor2;
}