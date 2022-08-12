module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  let strArr = [];
  for (let i = 0; i < str.length; i++) {
      strArr.push(str[i]);
      for (let j = 0; j < bracketsConfig.length; j++) {
          if (strArr[strArr.length - 1] === bracketsConfig[j][1] && strArr[strArr.length - 2] === bracketsConfig[j][0]) {
              strArr.pop();
              strArr.pop();
          }
      }
  }
  return strArr.length === 0;
}