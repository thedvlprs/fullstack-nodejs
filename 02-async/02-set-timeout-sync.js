let count = 0;
setInterval(() => console.log(`${++count} mississippi`), 1000);

// a blocking setTimeoutSync() fucntion:
setTimeoutSync(5500);
console.log('hello from the past!');
process.exit();

function setTimeoutSync(ms) {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) {}
}
