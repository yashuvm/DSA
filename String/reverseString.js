//1 method 
// function reverseString(st) {
//     //convert into ary 
//     let stack = []
//     for (let value of st) {
//         stack.push(value)
//     }
//     // Pop the characters of the stack and build the reversed string.
//     let reversedStr = ''
//     let i = st.length - 1
//     while (i >= 0) {
//         reversedStr += stack.pop()
//         i--
//     }
//     return reversedStr
// }

// const result = reverseString('geeksforgeeks')
// console.log(result)
//o(n)
//o(n)

//method 2 //using two pointer 
function reverseString(st) {
    //put the string into the array
    let stAry = st.split("")
    let start = 0;
    let end = stAry.length - 1
    while (start <= end) {
        const tmp = stAry[start]
        stAry[start] = stAry[end]
        stAry[end] = tmp
        start++;
        end--
    }
    return stAry.join("")

}

const result = reverseString('abc')
console.log(result)

//o(n)


