//Bubble Sort

function bubbleSort(arr) {
  var i, j
  var len = arr.length
  var isSwapped = false

  for (i = 0; i < len; i++) {
    isSwapped = false

    for (j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        isSwapped = true
      }
    }

    // IF no two elements were swapped by inner loop, then break

    if (!isSwapped) {
      break
    }
  }

  // Print the array
  console.log(arr)
}

var arr = [243, 45, 23, 356, 3, 5346, 35, 5]

// selection sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let small = i

    for (let j = 1 + i; j < arr.length; j++) {
      if (arr[j] < arr[small]) {
        small = j
      }
      if (i !== small) {
        const temp = arr[i]
        arr[i] = arr[small]
        arr[small] = temp
      }
    }
  }
  return arr
}

// insertion sort
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i]
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentValue
  }
  return arr
}

// merge sort
const mergeArray = (arr1, arr2) => {
  let i = 0
  let j = 0
  let results = []
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr2[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    results.push(arr2[i])
    j++
  }
}

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  let mid = Math.floor(ar.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return mergeArray(left, right)
}

// Quick sort
const pivot = (arr, start = 0, end = arr.length - 1) => {
  const pivot = arr[start]
  let swapIdx = start

  const swap = (array, i, j) => {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)

    // left
    quickSort(arr, left, pivotIndex - 1)
    // right
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

// Radix sort

const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

const digitCount = (num) => {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

const mostDigits = (nums) => {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

const radixSort = (arr) => {
  const maxDigits = mostDigits(arr)

  for (let k = 0; k < maxDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k)
      digitBuckets[digit].push(arr[i])
    }
    arr = [].concat(...digitBuckets)
  }
  return arr
}

console.log(radixSort([1233, 45, 0, 934, 49, 5]))
// [1233, 45, 0 , 934, 49, 5]
