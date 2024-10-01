function linearSearch(ary, searchElement) {
  let findLinearIn = -1;
  for (let i = 0; i <= ary.length - 1; i++) {
    if (ary[i] === searchElement) {
      findLinearIn = i;
    }
  }
  return findLinearIn;
}

const result = linearSearch([5, 4, 3, 2, 1], 5);
console.log(result);

//o(n)
