## Laços de repetição (Loops)

for ([expresaoInicial]; [condicao]; [incremento]) {
    [execucao]
}

-----
while ([condicao]) {
    [execucao]
}

-----
do {
    [execucao]
} while ([condicao]);

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

// While

let i = 0; //a variável precisa ser declarada antes
while (i <> 10) {
    i++;
}

## Funções

- Evitar a repetição de código
- Realizar chamadas dinâmicas de algoritmos

//let notas = [8, 8]; //escopo global

function calcularMedia(notas) {

    let soma = 0; //escopo local
    
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    media = soma / notas.length;

    return media;
}


function aprovacao(notas) {

	let media = calcularMedia(notas);

	let condicao = media >= 7 ? "Aprovado" : "Reprovado";
  
  return `Média: ${media} - Resultado: ${condicao}`;
}

console.log(aprovacao([7, 8, 5]));

//console.log(`Média: ` + calcularMedia([5, 5, 6, 9]) + aprovacao([5, 5, 6, 9]));
//console.log(aprovacao(media));