import { IProblem } from "../../typings/common.types";
import { execTest } from "../exec-test";
import { inputs, outputs } from "./data";

// This example has a working solution, other should have the solutions moved to the solutions folder
function findLongestArray(arrays: any[][]): any[] {
  return arrays.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, []);
}

execTest({
  inputs,
  outputs,
  function: findLongestArray,
});
