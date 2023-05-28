// Medium complexity

// Maximum Subarray

//Given an integer array nums, find the subarray with the largest sum, and return its sum.

// вариант хороший, но если будет nums = [-1], вернётся, -1
// выполняется алгоритмом кадене.
var maxSubArray = function (nums) {
    let maxFar = 0;
    let maxNow = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(maxFar, maxNow)
        maxNow = Math.max(maxNow + nums[i], 0)
        maxFar = Math.max(maxNow, maxFar);
    }
    return maxFar
};

// true
// динамическое программирование
// var maxSubArray = function (nums) {
//     let maxSum = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         console.log(maxSum)
//         nums[i] = Math.max(0, nums[i - 1]) + nums[i];
//         if (nums[i] > maxSum)
//             maxSum = nums[i];
//     }
//     return maxSum;
// };

console.log(maxSubArray([-1]))