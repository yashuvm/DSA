// function sum2Numbers(ary, target) {
//     let ary_ = []
//     for (let i = 0; i <= ary.length - 1; i++) {
//         for (let j = i + 1; j <= ary.length - 1; j++) {
//             if (ary[i] + ary[j] === target) {
//                 ary_.push(ary[i], ary[j])
//                 break;
//             }
//         }
//     }
//     return ary_
// }
//o(n^2)

function sum2Numbers(ary, target) {
    let ary_=[]
    const obj = {};
    for (let i = 0; i <= ary.length - 1; i++) {
        const findElement = target - ary[i];
        if (obj[findElement] === undefined) {
            obj[ary[i]] = 1
        }else{
            ary_.push([ary[i],findElement])
            break;
        }

    }
    return ary_;
}

const result = sum2Numbers([2, 6, 5, 8, 11], 15);
console.log(result);

//o(n)

