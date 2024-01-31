/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0
 
*/

// Solution
// addDigits nomli function yaradik va unga num parameterini qabul qiladi. Biz argument sifatida raqam jonatishimiz mumkin. Qilishimiz kerak bolgan narsa osha berilgan raqam bir xonalikdan katta sonlar bolsa bir biriga qoshish to 1 xonalik son chiqqungacha. Agar bir xonali son chiqadigan bolsa shu sonning ozi return bolishi kere. Shart berdik agar raqam 10 dan kichik bolsa osha raqamni ozini return qil. Va raqamni stringga ozgartirib uni numStr variablega saqladik. sum nomli variable yasab uni qiymatini 0 deb belgiladik. for loop orqali num ni length i miqdoricha aylanyapmiz va sum ga osha har bir namni qoshib chiqish logicini yozdik va yakunda addDigits(sum) ni return qildik.
var addDigits = function (num) {
  if (num < 10) {
    return num;
  }
  let numStr = num.toString();
  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }
  return addDigits(sum);
};
