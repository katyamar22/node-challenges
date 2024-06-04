const fs = require('fs');

// Extract the file path from command line arguments
const filePath = process.argv[2];

// Read the file synchronously
const fileContent = fs.readFileSync(filePath, 'utf8');

// Count the number of newlines (\n)
const newlineCount = (fileContent.match(/\n/g) || []).length;

// Print the newline count to the console
console.log(newlineCount);
