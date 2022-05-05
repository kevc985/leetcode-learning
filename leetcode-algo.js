// 1. Two Sum https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      // while hashmap is being set, start trying to search for two sum variables
      return [map.get(target - nums[i]), i]
    } else {
      // set map iteratively
      map.set(nums[i], i)
    }
  }
  // no two sum variables are found
  return []
}

//9. Palindrome Number https://leetcode.com/problems/palindrome-number/
//TO RE-DO AND ENHANCE
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // convert x into a string
  let string = x.toString()

  // rules for a palindrome string = string.reversed
  let reversed = ""
  console.log(string.length)
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i]
  }
  if (string === reversed) return true
  else return false
}

// 13. Roman to Integer https://leetcode.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const values = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1
  }
  let result = 0
  for (let i = 0; i < s.length; i++) {
    if (values[s[i]] < values[s[i + 1]]) {
      result -= values[s[i]]
    } else {
      result += values[s[i]]
    }
  }
  return result
}

// 20. Valid Parentheses https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // use stack as we have to close brackets in correct order, cannot overlap
  let stack = []
  const map = {
    "{": "}",
    "[": "]",
    "(": ")"
  }
  // loop for length of the input string
  for (let i = 0; i < s.length; i++) {
    // c is character
    let c = s[i]
    // check map object if it is valid
    if (map[c]) {
      // add opposite bracket to stack
      stack.push(map[c])
      // match with last item on stack
    } else if (c !== stack.pop()) {
      return false
    }
  }
  // if remaining on stack, return false, else return true
  return !stack.length
}

// 704. Binary Search https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let min = 0
  let max = nums.length - 1
  let middle

  while (min <= max) {
    middle = Math.floor((min + max) / 2)
    if (nums[middle] < target) {
      min = middle + 1
    } else if (nums[middle] > target) {
      max = middle - 1
    } else {
      return middle
    }
  }
  return -1
}
