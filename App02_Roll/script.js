function roll(n){
    const result = (Math.random() * (n - 1) + 1).toFixed(0);
    return result;
}

function qtd(quant,dado){
    for (let i = 0; i < quant; i++) {
        const x = document.createElement('span')
        x.innerHTML = `${roll(dado)}`
    }
}

const typeDado = document.getElementById('dado')
const qtdDado = document.getElementById('quantidade')
const buttonSubmit = document.getElementById('submit')
const result = document.getElementById('resultado')

buttonSubmit.onclick = (e) => {
    const dado = parseInt(typeDado.value);
    const quant = parseInt(qtdDado.value);

    const r = document.createElement('div')
    r.innerHTML = qtd(quant, dado)

    result.appendChild(r)

}






