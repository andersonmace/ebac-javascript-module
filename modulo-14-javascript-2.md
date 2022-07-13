## Laços de repetição

```
// fazer a revisão do carro aos 10km

let revisao = 3;

for (let km = 0; km <= revisao; km++) {
    if (km === 3) {
		console.log(`${km} km. Fazer a revisão.`);
    } else {
    	console.log(`Apenas ${km} km, então pode rodar.`);
    }
}
