function isPalindrome(word) {
  
for (let i = 0; i < word.length / 2; i++) {

  const j = word.length - 1 - i
  const startchar = word[i]
  const endChar = word[j]
  if (startchar === endChar) {
    return true
    } else {
      return false
  }}
}

/* 
  Add your pseudocode here
// initialize funtion isPalindrom
//iterate through string or use .map if possible for a string
// if letters equal each other return true else return false
// return true or false 

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
