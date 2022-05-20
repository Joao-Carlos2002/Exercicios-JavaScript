let spaceship = 'Endurance'
let newSpaceship = ''

for (let i = 0; i < spaceship.length; i++) {
    if (spaceship[i] == 'n') {
        newSpaceship += 'i'
    } else {
        newSpaceship += spaceship[i]
    }
}
console.log(newSpaceship)