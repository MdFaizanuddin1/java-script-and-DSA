// input = ["(", "(",")",")","(",")"]

function balanceParenthesis(arr, startIdx = 0, currIdx = 0) {
  if (startIdx == arr.length) {
    return currIdx == 0 ? true : false;
  }
  if (currIdx < 0) {
    return false;
  }

  if (arr[startIdx] == "(") {
    return balanceParenthesis(arr, startIdx + 1, currIdx + 1);
  } else if (arr[startIdx] == ")") {
    return balanceParenthesis(arr, startIdx + 1, currIdx - 1);
  } else {
    return false;
  }
}

const balanceParenthesisItr = (arr) => {
  let stack = [];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === "(") {
      stack.push(arr[i]);
      i++;
    } else if (arr[i] === ")" && stack[stack.length-1] === "(") {
      stack.pop();
      i++
    } else {
      return false
    }
  }
  return stack.length === 0 ? true : false;
};
const arr = ["(", "(", ")", ")", '(',")",'(', ")"];
console.log (balanceParenthesisItr(arr))
console.log(balanceParenthesis (arr))