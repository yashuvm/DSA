let sum = 0;
function sumNNumber(n) {
  if (n >= 1) {
    sum += n;
    n = n - 1;
    return sumNNumber(n);
  }
  return sum
}
const result = sumNNumber(6);
console.log(result)
