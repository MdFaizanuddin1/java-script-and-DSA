// input = ["(", "(",")",")","(",")"]

function balanceParenthesis(arr, startIdx = 0, currIdx = 0) {
  if (startIdx == arr.length) {
    return currIdx == 0 ? true : false;
  }
  if (currIdx < 0) {
    return false;
  }

  if (arr[startIdx] == "(") {
    balanceParenthesis(arr, startIdx + 1, currIdx + 1);
  } else if (arr[startIdx] == ")") {
    balanceParenthesis(arr, startIdx + 1, currIdx - 1);
  } else {
    return false;
  }
}
