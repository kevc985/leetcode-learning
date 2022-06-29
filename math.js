// 9. Palindrome Number https://leetcode.com/problems/palindrome-number/

var isPalindrome = function (x) {
  // edge cases

  if (x < 0 || (x % 10 === 0 && x !== 0)) return false
  let reverse = 0
  // remove each last digit and add to reverse number, and compare with x until match
  while (x > reverse) {
    reverse = reverse * 10 + (x % 10)
    if (x === reverse) break
    // remove off . decimal numbers
    x = Math.trunc(x / 10)
  }
  return x === reverse
}
