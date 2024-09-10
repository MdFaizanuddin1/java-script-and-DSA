// madam
// ada
// d
// true
const palindrome = (string) => {
  if (string.length <= 1) return true;

  if (string[0] === string[string.length - 1]) {
    return palindrome(string.substring(1, string.length - 1));
  } else {
    return false;
  }
};
function palindromeItr(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("amadama"));
