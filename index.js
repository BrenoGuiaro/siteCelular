const atual = document.querySelector('#atual')
const input = document.querySelector('#hj')
const atualiza = document.querySelector('#atualiza')

function atualizar (){
    const valorAT = document.querySelector('#hj').value
    atual.textContent = 'Voce esta com: R$:'+valorAT
}

function salvar (){
    localStorage.valor = document.querySelector('#hj').value
    console.log(localStorage.valor)
}
