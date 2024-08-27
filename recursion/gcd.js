function gcd(n1, n2) {
  if (n1 == n2) {
    return n1;
  }
  if (n1 > n2) {
    return gcd(n1 - n2, n2);
  } else {
    return gcd(n1, n2 - n1);
  }
}

console.log(gcd(42, 18));
