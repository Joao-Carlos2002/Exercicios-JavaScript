let distanceLightYear = prompt('Distância em anos-luz que deseja converter:')

let parsec = 0.306601
let astronomicUnity = 63241.1
let kilometers = 9.5 * Math.pow(10,12)

let chosenOption = prompt("Escolha uma unidade de medida:\n1- Parsec (pc)\n2- Unidade Astronômica (AU)\n3-Quilometros (km)")

let convertDistance

switch (chosenOption) {
    case '1':
        convertDistance = distanceLightYear * parsec
        alert('Distância em Anos-luz: ' + distanceLightYear + '\nParsec: ' + convertDistance)
        break
    case '2':
        convertDistance = distanceLightYear * astronomicUnity
        alert('Distância em Anos-luz: ' + distanceLightYear + '\nUnidade Astronômica: ' + convertDistance)
        break
    case '3':
        convertDistance = distanceLightYear * kilometers
        alert('Distância em Anos-luz: ' + distanceLightYear + '\nQuilometros: ' + convertDistance)
        break
    default:
        alert('Distância em Anos-luz: ' + distanceLightYear + '\nOpção Invalida!')
}