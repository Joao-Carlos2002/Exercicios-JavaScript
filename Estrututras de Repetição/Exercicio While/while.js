let spaceship = prompt('Qual o nome da nave?')
let warpSpaceQuantity = 0
let warpSpace = prompt('Deseja realizar uma dobra espacial?\n1- Sim\n2- Não')
while(warpSpace == 1) {
    warpSpaceQuantity += 1 
    warpSpace = prompt('Deseja realizar outra dobra espacial?\n1- Sim\n2- Não')
}
alert('Nome da nave: ' + spaceship + '\nNúmero de dobras espaciais feitas: ' + warpSpaceQuantity)