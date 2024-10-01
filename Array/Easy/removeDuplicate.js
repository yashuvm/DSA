function removeDuplicate(ary) {
  let i = 0;
  for (let j = 1; j <= ary.length - 1; j++) {
    if (ary[i] !== ary[j]) {
      ary[i + 1] = ary[j];
      ary[j] = "_";
      i++;
    }else{
        ary[j]="_"
    }
  }
  return ary;
}

const result = removeDuplicate([1, 1, 2, 2, 2, 3, 3]);
console.log(result);

//o(n)
