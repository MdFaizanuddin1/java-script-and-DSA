// madam
// ada
// d
// true
const palindrome = (string) => {
  if (string.length <= 1) return true;

  if (string[0] === string[string.length]) {
    return palindrome(
      string.substring(1) + string.substring(string.length - 1)
    );
  } else {
    return false;
  }
};
