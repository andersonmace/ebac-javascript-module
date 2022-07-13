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

// Cálculo da média de alunos

let alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7],
    [8, 8, 8, 8,]
];

let nota = 0; //boa prática

for (let i = 0; i < alunos.length; i++) {

	nota = 0; //A cada repetição o valor da nota volta a zero.
    notasAluno = alunos[i];
    console.log(`Aluno: ${i + 1}`);
    console.log(`Notas: ${notasAluno}`);
    for (let j = 0; j < notasAluno.length; j++) {
  	nota += notasAluno[j];
  }
  
  media = nota / 4;
  
  if (media >= 7) {
  	//console.log('aluno aprovado')
    resultado = 'Aprovado.'
  } else {
  	//console.log('aluno reprovado')
    resultado = 'Reprovado.'
  }
  
  console.log(`Média: ${media}, ${resultado}`);
  console.log(`---------`)
}

