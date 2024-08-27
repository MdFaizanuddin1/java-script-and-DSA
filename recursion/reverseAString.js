//iterative

function reverseString(string) {
  let reverse = "";
  let length = string.length - 1;

  while (length >= 0) {
    reverse += string[length];
    length--;
  }
  return reverse;
}
// console.log(reverseString("hello"));

// recursive

const reverseRecursive = (string) => {
  console.log("current string :", string);
  if (string === "") {
    return string;
  }

  //   return (
  //     string[string.length - 1] +
  //     reverseRecursive(string.substring(0, string.length - 1))
  //   );

  let recursivePart = reverseRecursive(string.substring(0, string.length - 1));
  let result = string[string.length - 1] + recursivePart;
  console.log(
    `Reversing last char : ${
      string[string.length - 1]
    } added in front of :${recursivePart} to form a result :${result}`
  );
  return result;
};
console.log(reverseRecursive("hello"));


