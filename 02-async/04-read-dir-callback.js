const fs = require('fs');

const filList = '04-read-dir-callback.js';
const directoryPath = './';

fs.readdir(directoryPath, (err, fileList) => {
  if (err) return console.error(err);

  console.log(fileList);
});
