async function cargar() {
  console.log('manzana');
  await null;
  console.log('pera');
}

console.log('sandía');
setTimeout(() => console.log('kiwi'), 0);
cargar();
new Promise(resolve => {
  console.log('mango');
  resolve();
}).then(() => console.log('uva'));
console.log('limón');


// sandia
// limón
// manzana
// pera
// mango
// uva
// kiwi

