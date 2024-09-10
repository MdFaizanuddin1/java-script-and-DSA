const recurrLength = (string) => {
  if (string === "") return 0;
  else return 1 + recurrLength(string.substring(1));
};
function lenItr (str ) {
  let length = 0
  if(str === '') return 0;
  while (str !== '') {
    length++
    str = str.substring (1)
  }
  return length
}
console.log (lenItr ('hello'))