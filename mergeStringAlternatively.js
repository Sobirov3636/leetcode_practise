/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
*/

// Solution
/*
mergeAlternately function yasayapmiz. Uning string qabul qiladigan word1 hamda word2 parametrlari mavjud.
Function ichida result nomli  ozgaruvchi yasadik natijalarni saqlab borish uchun. Uning init qiymatini bosh string qildik.
for loop orqali word1 hamda word2 ni aylanib chiqyapmiz. Va if statementini ishlatib agar i < word1.length boladigan bolsa result ga word1ning i indexidagi qiymatini saqlaydi. Va  word2 uchun ham shu shartni berganmiz. Va function imiz result ning qiymatini qaytaradi
*/

var mergeAlternately = function (word1, word2) {
  let result = "";
  for (let i = 0; i < word1.length || i < word2.length; i++) {
    if (i < word1.length) {
      result += word1[i];
    }
    if (i < word2.length) {
      result += word2[i];
    }
  }

  return result;
};
