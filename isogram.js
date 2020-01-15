/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that *
 * determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. 
 * Ignore letter case.
 * 
 * Example:
 * isIsogram("Dermatoglyphics") == true
 * isIsogram("aba") == false
 * isIsogram("moOse") == false // -- ignore letter case
 * @param {string} str 
 */

 // Personal solution
function isIsogram(str){
  let arrString = str.toLowerCase().split("");
  let isogram = false;
  if (arrString.length > 0) {
    for(let i = 1; i <= arrString.length; i++) {
      let char = arrString[i-1];
      let first = arrString.indexOf(char);
      let second = arrString.lastIndexOf(char);
      if(first == second) {
        isogram = true;
      } else {
        isogram = false;
        break;
      }// if first == second
    } // for
    return isogram;
  } else {
    return true;
  }
}

// Shortest solution:
// return new Set(str.toUpperCase()).size == str.length;
// return !/(\w).*\1/i.test(str)