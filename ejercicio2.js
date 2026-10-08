console.log('inicio');
setTimeout(() => console.log('timeout 1'), 0);
Promise.resolve()
  .then(() => console.log('promesa 1'))
  .then(() => console.log('promesa 2'));
setTimeout(() => console.log('timeout 2'), 0);
console.log('fin');