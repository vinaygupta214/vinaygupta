console.log('Script start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise callback');
});

console.log('Script end');

// Output:
// Script start
// Script end
// Promise callback
// Timeout callback
