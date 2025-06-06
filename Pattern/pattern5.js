const result = pattern1(5)
console.log(result)


function pattern1(n) {
    let st = ""
    for (let i = 1; i <= n; i++) {
        const cond = (n - i + 1)
        for (let j = 1; j <= cond; j++) {
            st += "*"
        }
        st += "\n"
    }
    return st
}


/*
-> n-i+1 = 5 -1 + 1 ->5
           5 - 2 +1 -> 4
           5 - 3 +1 ->3
           5 - 4 + 1 -> 2
           5 - 5 + 1 -> 1 
*/

/*

*****
****
***
**
*

*/