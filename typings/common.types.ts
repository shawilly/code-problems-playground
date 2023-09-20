export interface IData {
  inputs: any[][];
  outputs: any[];
}

export interface IProblem extends IData {
  function: (...args: any[]) => any;
}

export interface IResult extends IProblem {
  results: any[];
  passed: boolean;
}
