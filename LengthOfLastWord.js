/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/

// Solution
// lengthOfLastWord degan function yasadik. U parameter sifatida s ni qabul qilyapti va biz string jonata olamiz. Va bizga s parameterining oxirgi sozning lengthini return qiladigan codeni yozdik. Bu yerda trim() methodi stringlar orasida bosh joy boladigan bo'lsa olib tashlaydi. split(" ") methodi bizga bosh har bir sozni array ichiga solib beradi va biz pop() methodi orqali arrayning oxirgi elementini olishimiz mumkin. Songra osha elementning lengthini return qilyapmiz.

const lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};
