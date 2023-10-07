import * as fs from "fs";
import { generateUniqueString } from "../common";

function solveTestCase(N: number, X: number[]): number {
  X.sort((a, b) => a - b); // Sort elf positions in ascending order

  const distances = [];
  for (let i = 1; i < N; i++) {
    distances.push(X[i] - X[i - 1]); // Calculate distances between adjacent elves
  }

  let left = 0;
  let right = N - 1;
  let minMaxDistance = Number.MAX_VALUE;

  while (left < right) {
    const mid = (X[left] + X[right]) / 2; // Calculate meeting point

    // Calculate the maximum distance for this meeting point
    const maxDistance = Math.max(
      mid - X[left], // Distance from mid to leftmost elf
      X[right] - mid // Distance from mid to rightmost elf
    );

    minMaxDistance = Math.min(minMaxDistance, maxDistance);

    if (distances[left] > distances[right]) {
      left++;
    } else {
      right--;
    }
  }

  return minMaxDistance;
}

function main(): void {
  // Read the input file synchronously
  const input = fs.readFileSync("./input.txt", "utf-8");

  const lines = input.trim().split("\n");
  const T = parseInt(lines[0], 10);

  for (let i = 1; i <= T; i++) {
    const N = parseInt(lines[i * 2 - 1], 10);
    const X = lines[i * 2].split(" ").map(Number);

    const result = solveTestCase(N, X);

    // Generate a unique string for the output file name
    const uniqueString = generateUniqueString();
    const outputFilename = `output_${uniqueString}.txt`;

    // Write the result to the output file
    fs.writeFileSync(outputFilename, `Case #${i}: ${result}\n`, { flag: "a" });
    console.log(`Case #${i} result saved to ${outputFilename}`);
  }
}

main();
