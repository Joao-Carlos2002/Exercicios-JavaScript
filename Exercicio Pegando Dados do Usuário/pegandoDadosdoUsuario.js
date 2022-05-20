alert('Bem-Vindo! A seguir pediremos que informe alguns dados.')

// Pessoa Mais Velha
let OlderPersonName = prompt('Qual o nome da pessoa mais velha?')
let OlderPersonAge = prompt('Qual a idade da pessoa mais velha?')

// Pessoa Mais Nova
let YoungerPersonName = prompt('Qual o nome da pessoa mais nova?')
let YoungerPersonAge = prompt('Qual a idade da pessoa mais nova?')

let differentAge = OlderPersonAge - YoungerPersonAge;
alert(
    'Nome da pessoa mais velha: ' + OlderPersonName + '\nIdade da pessoa mais velha: ' + OlderPersonAge + ' anos' +
    '\n\nNome da pessoa mais nova: ' + YoungerPersonName + '\nIdade da pessoa mais nova: ' + YoungerPersonAge + ' anos' + 
    '\n\nA diferença de idade entre elas: ' + differentAge
    )