const fs = require('fs');

// Extract the file path from command line arguments
const filePath = process.argv[2];

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Count the number of newlines (\n)
  const newlineCount = (data.match(/\n/g) || []).length;

  // Print the newline count to the console
  console.log(newlineCount);
});

