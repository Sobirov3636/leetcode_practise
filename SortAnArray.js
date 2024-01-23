/*
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.

*/

// Solution
// Function yasadik u nums degan parameter qabul qilyaoti. Biz argument sifatida raqamlardan tashkil topgan arrayni jo'natamiz. Va bizga return qilib beradi raqamlarning tartiblangan holatini. Biz bunda arrayning sort() methodi ni ishlatdik. Raqmlar ichida manfiylari ham bolganligi sababli sort methodiga a hamda b argumentlarini berdik. Agar a b dan katta boladigan bolsa, return qiladi 1 ni. Agar a b dan kichik boladigan bolsa, return  qiladi -1 ni. Agar teng boladigan bolsa return qiladi 0 qiymatni. Shu method orqali tartiblanga arrayni hosil qilyapmiz.

var sortArray = function (nums) {
  return nums.sort((a, b) => a - b);
};
