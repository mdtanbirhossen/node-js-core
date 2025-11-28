const fs = require('fs');

const content1 = "Today was a good day. I learned about Node.js file system module. \nI wrote some code to read and write files asynchronously and synchronously.";

try {
    fs.writeFileSync('./output/test-sync.txt', content1)
    console.log("File written successfully (synchronously).");

} catch (error) {
    console.error("Error writing file (synchronously):", error);
}