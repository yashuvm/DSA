function checkBracketValid(stChar) {
    let stack = []
    let flag = true
    for (let value of stChar) {
        if (value === '{' || value === '(' || value === '[') {
            stack.push(value)
        } else {
            //
            if (value === '}' && stack.length > 0) {
                if (stack[stack.length - 1] === '{') {
                    stack.pop()
                } else {
                    flag = false
                    break;
                }
            }
            else if (value === ']' && stack.length > 0) {
                if (stack[stack.length - 1] === '[') {
                    stack.pop()
                } else {
                    flag = false
                    break;
                }
            }
            else if (value === ')' && stack.length > 0) {
                if (stack[stack.length - 1] === '(') {
                    stack.pop()
                } else {
                    flag = false
                    break;
                }
            }
            else{
              flag=false
              return flag
            }
            //
            

        }
    }

    if (stack.length === 0) return true
    return flag

}

const result = checkBracketValid('[(])')
console.log(result)
//[(])  //[()]{}{[()()]()}
//o(n) sss