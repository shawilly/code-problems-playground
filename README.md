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

1. Navigate to the `problems` directory.

2. Create a new TypeScript file for your problem, e.g., `my_problem.ts`.

3. Write the problem statement, input constraints, and expected output in the TypeScript file.

### Testing Solutions
Test code solutions against problem statements with the following command:

  ```bash
  npm run test file='my_problem.ts'
  ```

Replace `my_problem.ts` with the filename of the problem you want to test.

### Generating Documentation
Generate documentation for your coding challenges using:

  ```bash
  npm run generate-docs
  ```

Documentation will be generated in the docs directory.

#### Contributing
We welcome contributions! Feel free to improve existing problems, create new ones, or enhance the application's functionality. Please follow our Contribution Guidelines for details on how to contribute.

#### License
This project is licensed under the MIT License.
