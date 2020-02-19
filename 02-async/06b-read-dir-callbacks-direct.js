fs.readdir('./', function(err, files) {
  if (err) return console.error(err);
  mapAsync(files, fs.readFile, (err, results) => {
    if (err) return console.error(err);

    results.forEach((data, i) => console.log(`${files[i]}: ${data.length}`));

    console.log('done!');
  });
});
