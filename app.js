let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function consoleButton() {
    console.log('O botão foi clicado!');
}

function alertButton() {
    alert('Eu amo JS');
}

function promptButton() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você.`)
}

function somaButton() {
    let number1 = Number(prompt('Digite um número:'));
    let number2 = Number(prompt('Digite outro número:'));
    let resultado = number1 + number2;
    alert(`A soma de ${number1} com ${number2} é: ${resultado}!`)
}