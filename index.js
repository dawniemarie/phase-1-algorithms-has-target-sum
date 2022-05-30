function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++){
      if (array[j] === target - array[i]) {
        return true
      }
    }
  }
  return false
}

/* 
Quadratic Time: O(n²)
*/

/* 
first argument includes array of integers
  second argument includes target integer
    if any pair of the numbers in array adds up to target, return true
*/

/*
I need to write a function called "hasTargetSum" that will consist of two arguments which includes an array of integers, and a target integer. If any pair of the numbers in the array adds up to the target number, I return true.

Example:

hasTargetSum([2, 6, 8, 4, 14, 12], 18); => returns true, since 4 and 14 add up to 18
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 6, 8, 4, 14, 12], 18));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5, 2, 9], 12));
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
