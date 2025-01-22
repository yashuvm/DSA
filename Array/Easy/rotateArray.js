function rotateAry(ary, n) {
  //if n  > the size of ary n %=ary.length
  //first reverse last element by n postion
  let i = ary.length - n;
  let j = ary.length - 1;
  reverse(ary, i, j);
  //now reverse the first element till n postion
  let k = 0;
  let l = ary.length - 1 - n;
  reverse(ary, k, l);
  //now reverse the whole ary
  let m = 0;
  let nn = ary.length - 1;
  reverse(ary, m, nn);
  return ary;
}

function reverse(ary, i, j) {
  while (i <= j) {
    const tmp = ary[j];
    ary[j] = ary[i];
    ary[i] = tmp;
    i++;
    j--;
  }
  return ary;
}

const result = rotateAry([3, 7, 8, 9, 10, 11], 3);
console.log(result);

//o(n)
