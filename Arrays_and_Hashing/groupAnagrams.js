// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

function isAnagram(array){
  
  //declare a const assign it an object
  const pairedAnagrams = {}

  //iterate through the array 
  for (let i = 0; i < array.length; i++){

    const key = array[i].split('').sort().join('')

    pairedAnagrams[key] ? pairedAnagrams[key].push(array[i]) : pairedAnagrams[key] = [array[i]]

  }

  //return all the vals
  return [...Object.values(pairedAnagrams)]
}


