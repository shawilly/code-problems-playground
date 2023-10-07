import { execTest } from "../exec-test";
import { inputs, outputs } from "./data";

function findDuplicate(nums: number[]): number {
  const o: any = nums.reduce((acc: any, num) => {
    if (!acc[num.toString()]) {
      acc[num.toString()] = 0;
    }
    if (acc[num.toString()] !== -1) {
      acc[num.toString()]++;
    }
    if (acc[num.toString()] > 1) {
      acc[num.toString()] = -1;
    }
    return acc;
  }, {});
  return parseInt(
    Object.keys(o).find((key: string) => o[key] === -1) as string
  );
}

execTest({
  inputs,
  outputs,
  function: findDuplicate,
});
