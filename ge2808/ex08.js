console.log("Todas as tabuadas");
let c = 1;
while (true) {
  console.log("==========================");
  console.log(`Tabuado do ${c}`);
  console.log("==========================");
  for (let i = 0; i < 11; i++) {
    console.log(`${i} X ${c} = ${i * c}`);
  }
  c++;
  if (c == 11) {
    break;
  }
}
