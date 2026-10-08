async function preparar() {
  console.log('perro');
  await null;
  console.log('gato');
}

console.log('león');
setTimeout(() => console.log('tigre'), 0);
new Promise(resolve => {
  console.log('oso');
  resolve();
}).then(() => console.log('lobo'));
preparar();
console.log('zorro');


// leon
// oso
// perro
// zorro
// gato
// lobo
// tigre