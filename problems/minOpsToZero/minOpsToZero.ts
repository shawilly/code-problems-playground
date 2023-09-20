import { execTest } from "../exec-test";
import { inputs, outputs } from "./data";

/**
 * You are given an integer array nums and an integer x.
 * In one operation, you can either remove the leftmost or the rightmost element
 * from the array nums and subtract its value from x. Note that this modifies the array
 * for future operations. Return the minimum number of operations to reduce x to exactly
 * 0 if it is possible, otherwise, return -1.
 */
function minOperations(input: { nums: number[]; x: number }): number {
  const { nums, x: targetValue } = input;
  const totalSum = nums.reduce((a, b) => a + b, 0) - targetValue;
  const n = nums.length;
  let minimumOperations = 1 << 30;

  // If totalSum is negative, there is no solution
  for (let left = 0, right = 0, cSum = 0; left < n; ++left) {
    cSum += nums[left];
    while (right <= left && cSum > totalSum) {
      cSum -= nums[right++];
    }
    if (cSum == totalSum) {
      minimumOperations = Math.min(minimumOperations, n - (left - right + 1));
    }
  }

  return minimumOperations == 1 << 30 ? -1 : minimumOperations;
}

execTest({
  inputs,
  outputs,
  function: minOperations,
});
