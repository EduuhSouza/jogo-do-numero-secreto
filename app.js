alert("Bem-vindas (os) ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto)
let chute
let tentativas = 1;

// se a variável chute for igual ao número secreto
// While = enquanto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 100');
    if (chute == numeroSecreto) {
        break;
} else {
    if(chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`);
    } else{
        alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
}
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

