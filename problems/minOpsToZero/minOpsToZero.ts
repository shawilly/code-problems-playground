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

  // Add minimum operations as 1 << 30 so that it is greater than any possible answer
  let minimumOperations = 1 << 30;

  // Loop through the array and find the shortest subarray with sum = totalSum
  for (let lIndex = 0, rIndex = 0, cSum = 0; lIndex < n; ++lIndex) {
    // Add the current element to the sum
    cSum += nums[lIndex];
    // If the sum is greater than totalSum, remove elements from the left
    while (rIndex <= lIndex && cSum > totalSum) {
      cSum -= nums[rIndex++];
    }
    if (cSum == totalSum) {
      minimumOperations = Math.min(
        minimumOperations,
        n - (lIndex - rIndex + 1)
      );
    }
  }

  return minimumOperations == 1 << 30 ? -1 : minimumOperations;
}

execTest({
  inputs,
  outputs,
  function: minOperations,
});
