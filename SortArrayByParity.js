/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

 

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
Example 2:

Input: nums = [0]
Output: [0]
*/

// Solution
// sorArrayByParity function yasadi. U nums parameterini qabul qilyapti. Argument sifatida integerlardan iborat array jo'natamiz. Va biz sort() methodi orqali avval juft sonlar va keyin toq sonlar tartibiga ega bolgan natijani return qilyapmiz.
var sortArrayByParity = function (nums) {
  return nums.sort((a, b) => (a % 2) - (b % 2));
};
