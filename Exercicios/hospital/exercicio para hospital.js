let dor = prompt('Você sente dor no corpo?\n1 - Sim 2 - Não')
let febre = prompt('Você sente febre?\n1 - Sim 2 - Não')
let tosse = prompt('Você está tossindo?\n1 - Sim 2 - Não')
let congestao = prompt('Você está com congestão nasal?\n1 - Sim 2 - Não')
let mancha = prompt('Você está com manchas pelo corpo?\n1 - Sim 2 - Não')



function dengue() {
    if (dor == '1') { if (febre == '1') { if (tosse == '2') { if (congestao == '2') { if (mancha == '1') { alert('Você está com dengue, Vá para o pronto de atendimento mais perto para receber tratamento adequado') } } } } }
}

function gripe1() {
    if (dor == '1') { if (febre == '1') { if (tosse == '1') { if (congestao == '1') { if (mancha == '2') { alert('Você está gripado(a), Vá para o pronto de atendimento mais perto para receber tratamento adequado') } } } } }
}
function gripe2() {
    if (dor == '2') { if (febre == '1') { if (tosse == '1') { if (congestao == '1') { if (mancha == '2') { alert('Você está gripado(a), Vá para o pronto de atendimento mais perto para receber tratamento adequado') } } } } }
}
function gripe3() {
    if (dor == '1') { if (febre == '1') { if (tosse == '2') { if (congestao == '2') { if (mancha == '2') { alert('Você está com dengue, Vá para o pronto de atendimento mais perto para receber tratamento adequado') } } } } }
}
function saudavel() {
    if (dor == '1') { if (febre == '2') { if (tosse == '2') { if (congestao == '2') { if (mancha == '2') { alert('Você está saudavel, não a necessidade de se preocupar') } } } } }
}
function saudavel2() {
    if (dor == '2') { if (febre == '2') { if (tosse == '2') { if (congestao == '2') { if (mancha == '2') { alert('Você está saudavel, não a necessidade de se preocupar') } } } } }
}

dengue();
gripe1();
gripe2();
gripe3();
saudavel();
saudavel2();