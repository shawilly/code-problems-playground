const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const chalk = require('chalk');

function main() {
    const targetFileName = process.argv[2];

    if (!targetFileName) {
        console.error('Usage: node index.js <file.ts>');
        process.exit(1);
    }

    function findFileInProblemsFolder(baseDir, fileName) {
        const files = fs.readdirSync(baseDir);

        for (const file of files) {
            const filePath = path.join(baseDir, file);

            if (fs.statSync(filePath).isDirectory()) {
                const foundFile = findFileInProblemsFolder(filePath, fileName);
                if (foundFile) {
                    return foundFile;
                }
            } else if (file === fileName) {
                return filePath;
            }
        }

        return null;
    }

    const problemsFolderPath = path.join(__dirname, 'problems');
    const foundFilePath = findFileInProblemsFolder(problemsFolderPath, targetFileName);

    if (!foundFilePath) {
        console.error(`File not found: ${targetFileName}`);
        process.exit(1);
    }

    const child = spawn('npx', ['ts-node', '--transpile-only', foundFilePath], { stdio: "inherit" });

    // Error handling for spawn
    child.on('error', (err) => {
        console.error(chalk.red(`Error starting child process: ${err.message}`));
        process.exit(1);
    });

    if (child.stdout) {
        // Listen for stdout and stderr data events
        child.stdout.on('data', (data) => {
            data && console.log(`${data}`);
        });

        child.stderr.on('data', (data) => {
            console.error(chalk.red(`Error during testing: ${data}`));
        });

        // Listen for the exit event to know when the process has finished
        child.on('close', (code) => {
            const message = `Testing exited with code ${code}`;
            if (code === 0) {
                console.log(chalk.green(message));
            } else {
                console.log(chalk.red(message));
            }
        });
    }
}

main();
