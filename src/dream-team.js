module.exports = function createDreamTeam(members) {
  let newArr = [];
  if (typeof members === "number" || {}.toString.call(members) === "[object Object]" || members === undefined || members === null || members.length == 0 || members === false) {
    return false;
  }
  members.forEach(function(word) {
    if (typeof word === "number" || {}.toString.call(word) === "[object Object]" || {}.toString.call(word) === "[object Set]" || word === undefined || word === null || word === false || word === true || typeof word === "object") {
      let x = 1;
    } else {
      let a = word.toUpperCase().trim();
      return newArr.push(a[0]);
    }
  });
  let result = newArr.sort().join("");
  return result;
};