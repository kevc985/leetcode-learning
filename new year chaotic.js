/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
  let counter = 0
  for (let i = q.length - 1; i >= 0; i--) {
    let target = i + 1
    let targetIdx = i
    let currentBribe = 0
    while (q[targetIdx] !== target) {
      currentBribe++
      if (currentBribe > 2) {
        return console.log("Too chaotic")
      }
      targetIdx--
    }
    counter += currentBribe
    q.splice(targetIdx, 1)
  }
  return console.log(counter)
}
