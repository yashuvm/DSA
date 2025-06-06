const result = pattern1(5)
console.log(result)


function pattern1(n) {
    let st=""
    for(let i=0;i<n;i++){
        //space 
        for(let j=0;j<n-i-1;j++){
            st+= " "
        }
        //star
        for(let j=0;j<2*i+1;j++){
            st+= "*"
        }
        //space
        for(let j=0;j<n-i-1;j++){
            st+= " "
        }
        st+="\n"
    }
    return st
}


/*
space->star->space
[n-i-1,2*i+1,n-i-1]
[4,1,4]
[3,3,3]
[2,5,2]
[1,7,1]
[0,9,0]



*/

/*
    *    
   ***   
  *****  
 ******* 
*********

*/