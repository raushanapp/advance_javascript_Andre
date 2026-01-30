const captializeFirstLetter = (str) => {
  if (str.length === 0) return null;
  const captilaized = str.charAt(0).toUpperCase() + str.slice(1);
  return captilaized;
};

let str = "";
const result = captializeFirstLetter(str);
console.log(result);
// Time complexity is O(1) and space complexity is O(1)
