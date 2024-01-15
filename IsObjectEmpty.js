/*
Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.

Example 1:

Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.
Example 2:

Input: obj = {}
Output: true
Explanation: The object doesn't have any key-value pairs so it is empty.
Example 3:

Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements so it is not empty.
*/

// Solution
// Shartda aytilyaptiki  obj parametrga argument sifatida array yoki object berishimiz mumkin ekan. Agar array yoki object bosh boladigan bolsa, true qiymatini agarda ichida element yoki property boladigan bolsa false ni return qilshimiz kerak edi. Va quyidagi code orqali object va arrayni lengthni tekshirdik agar 0 ga teng bolsa true ni agar 0 dan katta boladigan bolsa falseni qaytaradi.

var isEmpty = function (obj) {
  return obj.length === 0 || Object.keys(obj).length === 0 ? true : false;
};
