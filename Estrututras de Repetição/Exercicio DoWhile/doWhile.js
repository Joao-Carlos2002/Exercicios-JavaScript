let spaceshipName = prompt('Digite o nome da nave:')
let letterSwitch = prompt('Qual a letra que vc deseja trocar?')
let letterTrade = prompt('Por qual letra vc quer trocar?')
let newSpaceshipName = ''
for (let n = spaceshipName.length - 1; n >= 0; n--) {
    if (spaceshipName[n]) {

    } else {
        newSpaceshipName += spaceshipName[n]
    }
}

alert(newSpaceshipName)