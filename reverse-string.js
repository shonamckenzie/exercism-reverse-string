//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  // Built in reverse method
  // return str.split("").reverse().join("");
  // return [...str].reverse().join('');

  // for loop ES6
  // let newString = '';
  // for(let char of str){
  //   newString = char + newString
  // }
  // return newString;

  // Recursion
  // if(str === ""){
  //   return str
  // }else {
  //   return reverseString(str.substr(1)) + str[0]
  // }

  // ternary operator
  return str ? reverseString(str.substr(1)) + str [0] : str
};
