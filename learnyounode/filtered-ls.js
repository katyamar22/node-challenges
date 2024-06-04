const fs = require('fs');
const path = require('path');

// Extract directory path and file extension from command line arguments
const directoryPath = process.argv[2];
const fileExtension = process.argv[3];

// Read the contents of the directory asynchronously
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter files by extension
  const filteredFiles = files.filter(file => path.extname(file).slice(1) === fileExtension);

  // Print the filtered files to the console
  filteredFiles.forEach(file => console.log(file));
});
