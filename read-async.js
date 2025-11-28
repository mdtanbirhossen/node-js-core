const fs = require('fs');

console.log("Start reading ..");

fs.readFile('./data/diary.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error(error.message);
    }
    console.log(data)
})
console.log("End of the file");