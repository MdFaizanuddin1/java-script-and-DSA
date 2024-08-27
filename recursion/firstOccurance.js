// iterative
function firstOccurance(arr, findMe, currIndex) {
  while (currIndex < arr.length) {
    if (arr[currIndex] == findMe) {
      return currIndex;
    }
    currIndex++;
  }
  return -1;
}

// recursive
const recursiveFirstOcc = (arr, findMe, currIndex) => {
  if (arr[currIndex] == findMe) return currIndex;
  if (currIndex === arr.length) return -1;

  return recursiveFirstOcc(arr, findMe, currIndex++);
};
