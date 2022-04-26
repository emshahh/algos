// ​Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

function topK(array, k){
  //declare const and assign new map
  let tracker = new Map();
  let countDown = k;
  const output = [];
  //iterate thru the array and add to map [number, freq]
  array.forEach((element) => {
    tracker.has(element) ? tracker.set(element, tracker.get(element) + 1) : tracker.set(element, 1)
  })

  tracker = [...tracker].sort((a, b) => b[1] - a[1])

  for (let i = 0; i < countDown; i++){
    output.push(tracker[i][0])
  }

  return output
}

// console.log(topK([3,0,1,0], 1))
// console.log(topK([-1,-1, 2, 2, 2, 3], 2))