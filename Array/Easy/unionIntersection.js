function unionIntersection(ary1, ary2) {
    let union = [];
    let intersection = []
    let i = 0
    let j = 0
    let m = ary1.length - 1
    let n = ary2.length - 1
    while (i <= m && j <= n) {
        if (ary1[i] < ary2[j]) {
            if (union.length > 0) {
                if (union[union.length - 1] !== ary1[i]) {
                    union.push(ary1[i])
                }
            } else {
                union.push(ary1[i])
            }
            i++

        } else if (ary2[j] < ary1[i]) {
            if (union.length > 0) {
                if (union[union.length - 1] !== ary2[j]) {
                    union.push(ary2[j])

                }
            } else {
                union.push(ary2[j])

            }
            j++
        } else if (ary2[j] === ary1[i]) {
            if (union.length > 0) {
                if (union[union.length - 1] !== ary2[j]) {
                    union.push(ary2[j])
                }
            } else {
                union.push(ary2[j])
            }
            ////
            if (intersection.length > 0) {
                if (intersection[union.length - 1] !== ary2[j]) {
                    intersection.push(ary2[j])
                }
            } else {
                intersection.push(ary2[j])
            }
            i++
            j++
        }
    }

    while (i <= m) {
        if (union.length > 0) {
            if (union[union.length - 1] !== ary1[i]) {
                union.push(ary1[i])
            }
        } else {
            union.push(ary1[i])
        }
        i++
    }
    while (j <= n) {
        if (union.length > 0) {
            if (union[union.length - 1] !== ary2[j]) {
                union.push(ary2[j])
            }
        } else {
            union.push(ary2[j])
        }
        j++
    }
    return [union, intersection]


}

const result = unionIntersection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]);
console.log(result);

//o(n)






