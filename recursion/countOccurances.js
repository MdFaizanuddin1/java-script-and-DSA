// [1,2,4,2,4,6,2] key =2;
// o/p --> 3

function countKey(array, key) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      count++;
    }
  }
  return count;
}
let array = [1, 2, 4, 2, 4, 6, 2];
let key = 2;
// console.log(countKey(array, key));

const recursiveCountKey = (array, key, idx = 0) => {
  if (idx >= array.length) return 0;

  return (array[idx] === key ? 1 : 0) + recursiveCountKey(array, key, idx + 1);
};
