// console.log('1');
// setTimeout(() => console.log('2'), 0);
// Promise.resolve().then(() => console.log('3'));
// console.log('4');

setTimeout(() => console.log('1'), 0);
console.log('2');
setTimeout(() => console.log('3'), 0);
console.log('4');
Promise.resolve().then(() => console.log('5'));
console.log('6');
setTimeout(() => console.log('7'), 0);
console.log('8');
setTimeout(() => console.log('9'), 0);
console.log('10');

