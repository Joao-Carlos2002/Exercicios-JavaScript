const spaceshipName = prompt('Digite o nome da sua nave:')
let spaceshipVelocity = 0

function menu() {
    let spaceshipMenu = prompt('Escolha uma das opções:\n1 - Acelerar 5 km/s\n2 - Desacelerar 5 km/s\n3 - Imprimir dados de bordo\n4 - Sair do programa')
    if (spaceshipMenu == 1) {
        acceleracion()
    } else if (spaceshipMenu == 2) {
        desacceleration()
    } else if (spaceshipMenu == 3) {
        onBoardData()
    } else if (spaceshipMenu == 4) {
        alert('Fechando Programa')
    } else {
        return menu()
    }
}
function acceleracion() {
    spaceshipVelocity += 5
    return menu()
}
function desacceleration() {
    if (spaceshipVelocity <= 4) {
        alert('Impossível diminuir mais que 0 km/s\nVelocidade atual:' + spaceshipVelocity)
        return menu()
    } else {
        spaceshipVelocity -= 5
        return menu()
    }
}
function onBoardData() {
    alert('Nome da nave: ' + spaceshipName + '\nVelocidade atual: ' + spaceshipVelocity)
    return menu()
}

menu()