function verificaValidacaoDoChute(chute){
    const numero = +chute

    /*Number.IsNaN para verificar se o que foi falado é de fato um número ou uma string*/
    if(chuteInvalido(numero) || numeroMaiorOuMenorQueOValorPermitido(numero) ){
        elementoChute.innerHTML += `<div>Valor inválido: o número precisa estar entre os números ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id='jogar-novamente' class="btn-jogar">Jogar Novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    }
    else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }
}


function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})