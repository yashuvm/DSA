//LIS -> [10,9,2,5,3,7,101,18] ->[10,101]  [2,5,7,101] -> 4 
//[0,1,0,3,2,3] ->[0,3] [0,2,3] [0,1,2,3] -> 4 
//[7,7,7,7] -> 1 


//if we find all subsequce then the complexity is increase 2^e exportionaly increase (brute force and revursive) 
//then we are use dynamic programing by storing the result for each step and use in the further or in future using memoziation
const result=lis([7,7,7,7])
console.log(result)

function lis(ary){
  let mamoAry=[]
  let lenValue=ary.length
  //
  for(let i=0;i<=lenValue;i++){
    mamoAry.push(1)
  }
  //start main pointer
  for(let i=1;i<=ary.length-1;i++){
    
    //start second pointer 
    for(let j=0;j<i;j++){
      if(ary[i] > ary[j] ){
        const currJGreater= mamoAry[j] + 1
        if(currJGreater > mamoAry[i]){
          mamoAry[i]=currJGreater
        }
      }
    }
    //
  }
  //find max 
  let maxValue=-1 
  for(let value of mamoAry){
    if(value > maxValue) maxValue=value
  }
  return maxValue
}

//make an ary for lenght with the given ary and put as 1 on intital 
//Each element in the ary represnt the    lenght of lis ending at the index 
//if j=0 and i=1 ->Agr i > j then lsi of i index = index (j) + 1 
//if j > i no do j++ 
