let velocity = 0
let pilotName = prompt('Iniciando sistema da nave\nNome do Piloto:')
let tempVelocity = prompt('Digite a velocidade que a nave voará:')
let confirmVelocity = confirm('Você realmente deseja que a nave vá a ' + tempVelocity + 'km/h?')
if (confirmVelocity == true) {
    velocity = tempVelocity
    if (velocity <= 0) {
        alert('Nave está parada. Considere partir e aumentar a velocidade.')
    } else if (velocity < 40) {
        alert('Você está devagar, podemos acelerar mais.')
    } else if (velocity < 80) {
        alert('Parece uma boa velocidade para manter.')
    } else if (velocity < 100) {
        alert('Velocidade alta. Considere diminuir.')
    } else {
        alert('Velocidade perigosa. Controle automático forçado.')
    }
} 
alert('Piloto: ' + pilotName + '\nVelocidade atual: ' + velocity)