import chalk from "chalk";
import { IProblem, IResult } from "../typings/common.types";

function logSeparator(title: string) {
  console.log(chalk.bold.bgYellow.black(`\n--- ${title} ---\n`));
}

function testTitle(title: string, passed: boolean) {
  return console.log(
    `${
      passed
        ? chalk.bold.bgGreen.black(`    ${title}    `)
        : chalk.bold.bgRed.black(`  ${title}    `)
    }\n`
  );
}

function logSection(title: string) {
  console.log(chalk.bold(`${title}`));
}

function resultSection(title: string, result: any) {
  console.log(chalk.bold(`${title}:`), `${JSON.stringify(result)}\n`);
}

/**
 * Executes the tests for a problem
 * @param problem - The problem object to test
 * @returns The problem object with the results of the tests
 */
export function execTest(problem: IProblem): IResult {
  const { inputs, outputs, function: func } = problem;
  const inputsWithOutputs = inputs.map((input, index) => ({
    input,
    output: outputs[index],
  }));

  logSeparator("Test Results");
  const results = inputsWithOutputs.map(({ input, output }, index) => {
    const result = func(input);
    const passed = JSON.stringify(result) === JSON.stringify(output);
    if (passed) {
      console.log(chalk.green(`✅ Test ${index + 1} passed!\n`));
    } else {
      console.log(chalk.red(`❌ Test ${index + 1} failed!\n`));
    }
    return {
      test: index + 1,
      result,
      output,
      input,
      passed,
    };
  });

  const passed = results.every((result) => result.passed);
  logSeparator("Overall Result");
  const statusMessage = passed
    ? chalk.green("✅ Your solution has passed!")
    : chalk.red("❌ Your solution has failed!");
  console.log(chalk.bold(`${statusMessage}\n`));

  console.log(chalk.bold(`\nResults:\n`));
  results.forEach(({ test, input, result, output, passed }) => {
    testTitle(`Test ${test}`, passed);
    resultSection("Input", input);
    resultSection("Output", output);
    resultSection("Your Result", result);
    console.log(
      `Passed: ${passed ? chalk.bold.green("Yes") : chalk.bold.red("No")}\n`
    );
  });
  process.exit();
}
