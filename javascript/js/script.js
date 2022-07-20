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

// console.log(aprovacao([7, 8, 6]));

//console.log(`Média: ` + calcularMedia([5, 5, 6, 9]) + aprovacao([5, 5, 6, 9]));
//console.log(aprovacao(media));

document.addEventListener('submit', (e) => { 
    //Evita o comportamento padrão do submit
    e.preventDefault();
    //Faz com o que o submit seja acionado somente apartir do event listener
    e.stopPropagation();

    let formulario = document.querySelector('#form-01');
    // Captura dados de formulários
    let dados = new FormData(formulario);
    let objeto = {};

    let notas = [];

    //percorrer todas as chaves dos dados
    for (let key of dados.keys()) { 
        
        objeto[key] = dados.get(key);

        // notas += parseInt(dados.get(key));

        //push adiciona valores no array
        notas.push( parseInt(dados.get(key)) );

    } 

    texto = aprovacao(notas);
    document.querySelector('#resultado').innerHTML = texto;
    console.log(notas);
    console.log(objeto);
});