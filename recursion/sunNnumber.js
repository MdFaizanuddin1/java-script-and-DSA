const sumOfN = (n) => {
  if (n == 1) return 1;
  return n + sumOfN(n - 1);
};
console.log(sumOfN(5));

function sumOfNIterative(n) {
  let count=0;
  for (let i = 0; i <= n; i++) {
    count += i;
  }
  return count
}
console.log(sumOfNIterative(5));
