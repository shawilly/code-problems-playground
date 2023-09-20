# CodeProblems Playground

**A Simple Node.js and TypeScript Application for Writing, Testing, and Documenting Code Problems**

This repository houses a simple yet versatile Node.js application designed to streamline the process of writing, testing, and documenting code problems. Whether you're an educator, a software developer honing your skills, or anyone passionate about coding challenges, this tool is your ideal companion.

![Node.js](https://img.shields.io/badge/Node.js-v14.17.6-green)
![TypeScript](https://img.shields.io/badge/TypeScript-v4.5.2-blue)

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Writing Problems](#writing-problems)
  - [Testing Solutions](#testing-solutions)
  - [Generating Documentation](#generating-documentation)
- [Contributing](#contributing)
- [License](#license)

## Overview

Welcome to the CodeProblems Playground! This Node.js and TypeScript application simplifies the process of creating, testing, and documenting coding problems. Whether you're an educator, a coding enthusiast, or a software developer, this tool is designed to streamline your coding challenge workflow.

### Key Features

- **Problem Creation**: Easily craft coding problems with descriptive prompts, input constraints, and expected outputs using TypeScript.

- **Code Execution**: Test code solutions against problem statements using an intuitive interface. Evaluate correctness and efficiency effortlessly.

- **Documentation**: Seamlessly generate documentation for your coding challenges, ensuring clarity and consistency.

- **Scalable**: This application is built to accommodate a growing collection of problems, making it suitable for a range of educational and training scenarios.

### Getting Started

#### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: [Download and Install Node.js](https://nodejs.org/)

#### Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/your-username/codeproblems-playground.git
  ```

2. Navigate to the project directory:

  ```bash
  cd codeproblems-playground
  ```

3. Install dependencies:

  ```bash
  npm install
  ```

## Usage

#### Writing Problems

To create a new coding problem, follow these steps:

Certainly! Here's a simplified breakdown:

  1. Find the 'problems' folder.
  2. Inside 'problems', create or locate a folder for your specific problem.
   - This folder should contain:
     - A file named after your problem to run your solution.
     - Files to store input data.
     - A README explaining the problem.
     - A 'solutions' folder for reference.
  3. Develop and test your solution using the provided instructions.
  4. If you're happy with your solution, move it into the 'solutions' folder with a clear name.
  5. In your TypeScript file for the problem, include the problem statement and import any existing input examples. You can also add more inputs and their expected outputs as needed.

### Testing Solutions

Each folder in problems will have a namesake ts file that should be used to run the code. They will pull from 

Test code solutions against problem statements with the following command:

  ```bash
  npm test my_problem.ts
  ```

Replace `my_problem.ts` with the filename of the problem you want to test.

#### Contributing
We welcome contributions! Feel free to improve existing problems, create new ones, or enhance the application's functionality. Please follow our Contribution Guidelines for details on how to contribute.

#### License
This project is licensed under the MIT License.
