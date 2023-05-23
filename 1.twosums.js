//easy complexity
var twoSum = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};
// another variant, but loading is longer
// var twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j]
//       }
//     }
//   };
// }
console.log(twoSum([2, 4, 5, 6, 7, 8, 9], 10));
