import * as path from "path";
import * as tsNode from "ts-node";
import * as fs from "fs/promises";
import chalk from "chalk";

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error(chalk.red("Usage: npm start <file.ts>"));
  process.exit(1);
}

const targetFile = args[0];

async function findFileInProblemsFolder(
  baseDir: string,
  fileName: string
): Promise<string | null> {
  try {
    const files = await fs.readdir(baseDir);

    for (const file of files) {
      const filePath = path.join(baseDir, file);

      const stats = await fs.stat(filePath);
      if (stats.isDirectory()) {
        const foundFile = await findFileInProblemsFolder(filePath, fileName);
        if (foundFile) {
          return foundFile;
        }
      } else if (file === fileName) {
        return filePath;
      }
    }
    return null;
  } catch (err) {
    console.error("Error while searching for file:", err);
    return null;
  }
}

// Resolve the file path to ensure it's correct
findFileInProblemsFolder(process.cwd(), targetFile)
  .then((resolvedFilePath) => {
    if (resolvedFilePath) {
      // Register TypeScript compilation with ts-node
      tsNode.register({ transpileOnly: true });

      // Import and run the specified TypeScript file
      import(resolvedFilePath)
        .then((_module) => {
          console.log(chalk.green(`Running ${resolvedFilePath}`));
        })
        .catch((err) => {
          console.error(chalk.red(`Error running ${resolvedFilePath}:`), err);
          process.exit(1);
        });
    } else {
      console.error(chalk.red(`File ${targetFile} not found.`));
      process.exit(1);
    }
  })
  .catch((err) => {
    console.error(chalk.red(`Error resolving file path:`), err);
    process.exit(1);
  });
