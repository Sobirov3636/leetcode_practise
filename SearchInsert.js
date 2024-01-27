/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

// Solution
// searchInsert function yasadik va u ikkita parameter qabul qiladi nums array hamda target number. Shart shundayki agar target raqamimiz nums arrayining ichida bolsa uning index raqamini return qilishimiz kerak. Agar yoq bolsa nechanchi indexga joylashgan bolishi kerakligini ya'ni joylashadigan indexni return qilishimiz kerak. Arrayimizdagi sonlar osish tartibida joylashgan deb faraz qilishimiz kerak ekan. Men buni for loop orqali yechim topishga harakat qildim. Agar target kichik yoki teng bolsa nums ni ichidagi qaysidir elementga osha elementni index raqamini return qiladi. Agar target sonimiz nums arrayi ichidagi sonlardan katta boladigan bolsa, biz u son arrayning eng oxirgi elementida keyin joylashishi kerak ekanligini tushunishimiz mumkin. Shuning uchun oxirida nums arrayining lengthini return qilib qoyyapman.

const searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) return i;
  }
  return nums.length;
};
