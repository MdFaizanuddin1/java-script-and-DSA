const set = new Set();

const arr1 = [1, 2];
const arr2 = [1, 2];
const arr3 = "[1, 2]";

set.add(arr1);
set.add(arr2);
set.add(arr3);

// console.log(set.size);
// console.log(set);
// console.log(set.has("[1, 2]"));

const start = "az";
const newSet = new Set(start);
const newSetV2 = new Set([start]);

console.log(newSet);
console.log(newSetV2);