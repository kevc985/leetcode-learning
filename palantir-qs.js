/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let newMerge = []
  // sort by first integer
  intervals.sort(function (a, b) {
    return a[0] - b[0]
  })

  // loop through interval list
  let first = 0
  let last = 0
  for (let i = 0; i < intervals.length; i++) {
    const currFirst = intervals[i][0]
    const currLast = intervals[i][1]
    if (i === 0) {
      first = currFirst
      last = currLast
    }

    if (currLast > last && currFirst <= last) last = currLast

    if (currLast > last && currFirst > last) {
      newMerge.push([first, last])
      first = currFirst
      last = currLast
    }
    if (i === intervals.length - 1) {
      newMerge.push([first, last])
    }
  }
  return newMerge
}
