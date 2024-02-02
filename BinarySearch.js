/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

//Solution
// Shartimizda bizda nums arrayi hamda target mavjud. Agar nums array ichida target valuesi mavjud bolsa osha element index raqamini,  bolmasa -1 return qilish kerak ekan. Quyidagi birinchi usulda for loop orqali bajardim. Ikkinchi usul qisqa sodda javascriptni indexOf() methodidan foydalandim. indexOf methodida agar value bolsa uning indexini bolmasa -1 ni qaytaradi.
var search1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      console.log(i);
      return i;
    }
  }
  return -1;
};

const search2 = (nums, target) => nums.indexOf(target);
