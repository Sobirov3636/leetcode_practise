/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

// Solution
// Biz linked list bilan ishlayapmiz. Ikki marta takrorlangan elementni ochirishimiz kerak ekan. deleteDuplicates nomli function yasadim va parameter sifatida head  ni beryapmiz, u linked list ni argument sifatida qabul qiladi. Va current nomli ozgaruvchiga headni tengladim. while loopdan foydalandim. While loop current bolsa va curren.next elementlarimiz bolsa ishlaydi. Agar hozirgi current ni valuesi keyingi valuega teng boladigan bolsa, next ni next.next ga tenglaydi(duplicate elementni skip qilish uchun). Agar bu shartimiz qanoatlanmasa currentga current.next orqali keyingi keyingi nodega otadi. Va bizga duplicate elementi bolmagan  head node listni  return qilib beradi.

var deleteDuplicates = function (head) {
  let current = head;

  while (current && current.next) {
    current.val === current.next.val ? (current.next = current.next.next) : (current = current.next);
  }
  return head;
};
