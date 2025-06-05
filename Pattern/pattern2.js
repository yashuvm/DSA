const result = pattern1(5)
console.log(result)


function pattern1(n) {
    let st = ""
    for (let i = 0; i < n; i++) {

        for (let j = 0; j <= i; j++) {
            st += " * "
        }
        st += "\n"
    }
    return st
}



/*

*
**
***
****

*/