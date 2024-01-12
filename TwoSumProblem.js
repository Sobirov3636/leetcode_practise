/*
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


*/

/*
Solution:
Function yaratdim. U 2 ta parametr qabul qiladi. Ular nums arrayi va target number. Men nums arrayi ichidagi raqamlarning 2 tasini yigindisi target numberga teng bolganlarining index raqamini return qilish kerak bolganligi sababli, men nested for loop dan foydalandim.  loopimizda i (raqam indexi) va j (raqam index) lari mavjud. j ni men initial qiymatini i + 1 qilib oldim. Chunki birinchi safar i 0 indexdagi raqamni olgan payt j 1 indexdagi raqamni oladi. Shu tariqa men shart berdim. Agar nums array ichidagi i indexdagi raqam bilan nums arrayidagi j indexdagi raqamning yigindesi targetga teng bolsa menga i hamda j indexlarni return qil degan shartni berdim. Shu tariqa men xoxlagan resultni oldim.
*/
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
twoSum([2, 3, 4, 5, 6, 7], 12);
