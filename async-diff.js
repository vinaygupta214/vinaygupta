console.log('Start');
for (let i = 0; i < 1000000000; i++) {
  // Time-consuming loop
}
console.log('End');
// 'End' is logged only after the loop completes


console.log('Start');
setTimeout(() => {
  console.log('Timeout');
}, 1000);
console.log('End');
// Output:
// Start
// End
// Timeout (after 1 second)
