const fs = require('fs').promises;

fs.readdir('./')
  .catch(err => console.error(err))
  .then(files => {
    files.forEach(function(file) {
      fs.readFile(file)
        .catch(err => console.error(err))
        .then(data => console.log(`${file}: ${data.length}`));
    });

    console.log('done!');
  });
