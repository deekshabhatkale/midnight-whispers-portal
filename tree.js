const fs = require('fs');

function printDirectoryStructure(directory, level = 0) {
  const indent = '  '.repeat(level); 
  fs.readdirSync(directory).forEach(item => {
    if (item === 'node_modules' || item === '.git') {
      return; // Skip 'node_modules' and '.git' directories
    }

    const path = `${directory}/${item}`;
    const stats = fs.statSync(path);

    if (stats.isDirectory()) {
      console.log(`${indent}- ${item}/`);
      printDirectoryStructure(path, level + 1);
    } else {
      console.log(`${indent}- ${item}`);
    }
  });
}

const rootDirectory = '.'; // Current directory

printDirectoryStructure(rootDirectory);