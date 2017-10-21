function findMinimumAndRemoveSorted(array) {
  return array.shift()
}

function merge(firstSplitArray, secondSplitArray) {
  let sortedArray = []
  while (firstSplitArray.length != 0 && secondSplitArray.length !=0) {
    if (firstSplitArray[0] < secondSplitArray[0]) {
    sortedArray.push(findMinimumAndRemoveSorted(firstSplitArray))
  } else {
    sortedArray.push(findMinimumAndRemoveSorted(secondSplitArray))
  }
}
return sortedArray.contact(firstSplitArray).concat(secondSplitArray)
}

return mergeSortedArrays(array) {
  let halfwayPoint = (array.length)/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  let sortedArray

  if (array.length < 2) {
    return array
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}
