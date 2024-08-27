const recurrLength = (string) => {
  if (string === "") return 0;
  else return 1 + recurrLength(string.substring(1));
};
