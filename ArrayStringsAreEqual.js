/*
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

 

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
Example 3:

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true
*/

// Solution
// Bizda word1 hamda word2 parameteridan iborat function bor. Biz argument sifatida stringlarda iborat array yuboramiz. Agar word1 hamda word2 arraylarining elementlari bir xil teng boladigan bolsa trueni , bolmasa false qiymatni qaytarishimiz kerak. Bunda tartib ham ahamiyatga ega. Bunda men join() methoidadan foydalanib array ichidagi hamma elementlarni bitta qilib stringga aylantirdim va teng yoki teng emasligini tekshirdim.
const arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("");
};
