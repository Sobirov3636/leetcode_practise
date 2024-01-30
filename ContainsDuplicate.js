/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

// Solution
// containsDuplicate nomli function yasadik va u nums parameterini qabul qiladi. Biz argument sifatida array yubaoramiz. Biz qilishimiz kerak bolgan ish agar array ichida bir xil element kamida ikki marta takrorlangan bolsa, true qiymatni agar takrorlanmagan bolsa false qiymatni qaytarishimiz keark. Bu ishni Set orqali amalga oshridim. Chunki Set duplicate valuelarni qabul qilmaydi. Va natijada setning size nums ning lengthiga teng bolmasa true ni qaytar bolmasam false ni qaytar buyrugini yozdim.

var containsDuplicate = function (nums) {
  const set = new Set(nums);
  return set.size !== nums.length ? true : false;
};
