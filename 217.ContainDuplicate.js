//easy complexity
var containsDuplicate = function (nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(`${nums[i]}`);

    }
    if (set.size < nums.length) {
        return true
    } else {
        return false
    }
};

//easy variant
// var containsDuplicate = function (nums) {
//     const set = new Set(nums);
//    return set.size !== nums.length;
// };
console.log(containsDuplicate([1, 2, 3, 4]))