/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

*/

// Solution
// reverseWords nomli function yasadik va u s parameter qabul qiladi. Biz unga argument sifatida string jo'natamiz. Va biz function ichida argument sifatida bergan string word larni reverse qilishi kerak bolgan  buyruqlarni berib natijani return qildim. split(" ") methodi orqali so'zlarni har birini ajratib arrayga solib oldim. filter() methodi orqali sozlar orasida bosh joy bolishi ham mumkinligi sabab bo'sh joylarsiz faqat so'zlarni ozini olish logicni yozdim. Va reverse() methodi orqali sozlarni teskari qildim. Va yakunda join(" ") methodi orqali so'zlarni stringga aylantirib qoydim. Shu tariqa solution tayyor!
const reverseWords = function (s) {
  return s
    .split(" ")
    .filter((x) => x !== "")
    .reverse()
    .join(" ");
};
