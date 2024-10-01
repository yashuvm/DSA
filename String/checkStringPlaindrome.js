function checkStPlaindrome(st) {
    let arySt = st.split("")
    let start = 0
    let end = st.length - 1
    let string = ''
    while (start <= end) {
        string += arySt[end]
        end--
    }
    if (st === string) return 'plaindrome'
    return 'not plaindrome'
}

const result = checkStPlaindrome('aba')
console.log(result)

//o(n)