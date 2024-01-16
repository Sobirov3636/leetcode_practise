/*
Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
 

Example 1:

Input: 
arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
], 
arr2 = [
    {"id": 3, "x": 5}
]
Output: 
[
    {"id": 1, "x": 1},
    {"id": 2, "x": 9},
    {"id": 3, "x": 5}
]
Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.
Example 2:

Input: 
arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
], 
arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
Output: 
[
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.
Example 3:

Input: 
arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]
arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]
Output: [
    {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
]
Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, that value is taken form arr1.
*/

// Solution

// Birinchi bolib result objectini init qilib oldim. arr1 nin har bir objecting id  propertysini key sifatida  foydalanib resultga saqladim. Keyin arr2 ni forEach qilib aylanib, agar resultning ichida id si bir xil bolgan property boladigan bolsa, arr1 da bolgan valuelarni arr2 dagi objectning valuesi update qiladi. Ya'ni  arr1  ning ichidagi "id":1 bolgan objectda "c":30 property boladigan bolsa, arr2 da ham "id":1 va "c":40 property boladigan bolsa c ning qiymatini 40 ga update qilib qoyadi. Agar ikkala arrayning ichidagi bir xil id li objectning birida bor property ikkinchisida yoq boladigan bolsa resultda u ham qoshiladi. Va oxirgi natijani Object.values() methodi orqali objectga ega bolgan array return qiladigan qiymat qaytaryapmiz.

const join = function (arr1, arr2) {
  const result = {};
  // 1. Initilize
  arr1.forEach((item) => {
    result[item.id] = item;
  });
  // 2. joining array2 elements
  arr2.forEach((item) => {
    if (result[item.id]) {
      Object.keys(item).forEach((key) => {
        result[item.id][key] = item[key];
      });
    } else {
      result[item.id] = item;
    }
  });
  const joinedArray = Object.values(result);
  return joinedArray;
};
