//1 For the outer loop count the no of rows or lines
//2 For the inner loop Focus on the column and connect them some how to the rows
//3 Print the "*" inner for loop 
//4 Observe symmetry (optional)


const result = pattern1(4)
console.log(result)


function pattern1(n) {
    let st=""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            st+="*"
        }
        st+='\n'
    }
    return st
}




//0->4
//1->4
//2->4
//3->4


/*

****
****
****
****

*/