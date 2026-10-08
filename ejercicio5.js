console.log('inicio de la demostración');

async function preparar() {
  console.log('perro');
  await null;
  console.log('gato');
  await null;
  console.log('conejo');
}

console.log('león');

setTimeout(() => {
  console.log('tigre');
  Promise.resolve().then(() => console.log('jaguar'));
}, 0);

setTimeout(() => console.log('puma'), 0);

new Promise(resolve => {
  console.log('oso');
  resolve();
})
  .then(() => console.log('lobo'))
  .then(() => console.log('zorro'));

preparar();

console.log('búho');





// leon
// oso
// perro
// lobo
// zorro
// buho
// gato
// tigre
//jaguar
//conejo
//puma
// inicio de la demostración