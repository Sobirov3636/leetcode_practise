/*
Given a string s, return the number of segments in the string.

A segment is defined to be a contiguous sequence of non-space characters.

 

Example 1:

Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
Example 2:

Input: s = "Hello"
Output: 1
 */

// Solution
// Function yasadik u s parametrini qabul qiladi va biz argument sifatida string yuboramiz. Va bizga stringda nechta soz borligini hisoblab qiymatini return qilib beradi. split(" ") methodi har bir sozlarimizni ajratib arrayga solib beradi. filter() methodi orqali bosh stringda iborat bolmagan sozlarni ajratib olib uni wordsga saqalab yakunda wordsni lengthini return qilyapman.
var countSegments = function (s) {
  const words = s.split(" ").filter((word) => word !== "");
  return words.length;
};
