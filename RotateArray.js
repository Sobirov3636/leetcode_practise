/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

// Solution
// rotete nomli void function yasadim. Va u nums hamda k parameterlarini qabul qiladi. Argument sifatida nums ga numberlardan iborat array jonatiladi va k ga number jonatiladi. Sharti shuki nums arrayi ichidagi k cha elementlarni arrayimizni orqasidan oldi tomoniga olib otishimiz kerak boladi. Buning uchun men arraylarning unshift hamda splice methodlaridan foydalandim. unshift() bu arrayni boshiga element qoshib beradi. splice() methodi esa arrayimizni ichidagi elementlarni kesib beradi. Ikkala method ham arrayni mutate qiladi.
const rotate = function (nums, k) {
  nums.unshift(...nums.splice(-k % nums.length));
};
