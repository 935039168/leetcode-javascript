/*
 * @lc app=leetcode.cn id=556 lang=javascript
 *
 * [556] 下一个更大元素 III
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// https://leetcode.cn/problems/next-greater-element-iii/solution/xia-yi-ge-geng-da-yuan-su-iii-by-leetcod-mqf1/
const MAX = 2147483647;
var nextGreaterElement = function (n) {
    const nums = [...('' + n)];
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    if (i < 0) return -1;
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];
    reverse(nums, i + 1);
    const ans = 0 + nums.join('');
    return ans > MAX ? -1 : ans;
};
const reverse = (nums, begin) => {
    let i = begin, j = nums.length - 1;
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
};
// @lc code=end

