let count = 0;
setInterval(() => console.log(`${++count} mississippi`), 1000);

// a non-blocking setTimeout() fucntion:
setTimeout(() => {
  console.log('hello from the past!');
  process.exit();
}, 5500);
