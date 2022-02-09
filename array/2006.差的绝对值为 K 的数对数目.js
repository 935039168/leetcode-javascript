/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 暴力
var countKDifference = function (nums, k) {
    let ans = 0;
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) ans++;
        }
    }
    return ans;
};
console.log(countKDifference([1, 2, 2, 1], 1)); // 4