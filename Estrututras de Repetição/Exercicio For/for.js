let newSpaceship = ''
let spaceship = prompt('Digite o nome da nave?')
let letterToReplace = prompt('Qual letra deseja subistituir?')
let ReplacementLetter = prompt('Para qual letra deseja subistituir?')

for (let i = 0; i < spaceship.length; i++) {
    if(spaceship[i] == letterToReplace) {
        newSpaceship += ReplacementLetter
    } else {
        newSpaceship += spaceship[i]
    }
}

alert('O novo nome da nave é: ' + newSpaceship)

                                        Pâmella=amor_da_minha_vida<3