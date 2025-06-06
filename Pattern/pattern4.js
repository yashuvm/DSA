const result = pattern1(5)
console.log(result)


function pattern1(n) {
    let st = ""
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            st += `${i}`
        }
        st+="\n"
    }
    return st
}



/*

1
22
333
4444
55555

*/