//medium complexity

//Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


//not working in leetcode 
var productExceptSelf = function (nums) {
    let otvet = [];
    for (let i = 0; i < nums.length; i++) {
        otvet.push(nums.slice(0, i - 1).reduce((a, b) => a * b, 1)
            * nums.slice(i, nums.length).reduce((a, b) => a * b, 1)
        )
        console.log(otvet)
    }
    return otvet
};

//working variant

var second = (nums) => {
    let result = []
    let left = 1;
    let right = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = left;
        left *= nums[i];
    }


    return result;
}

console.log(second([-1, 1, 0, -3, 3]))