/* I will use Sum difference Method */

function findMissingNumberInTheRange(nums) {
    const l = nums.length;
    const expectedSum = (l * (l + 1)) / 2;
    for (let i = 0; i < l; i++) {
        actualSum += nums[i];
    }

    const missingNumber = expectedSum - actualSum;

    return missingNumber;
}
