function roll(n){
    const result = (Math.random() * (n - 1) + 1).toFixed(0);
    return result;
}

function qtd(quant,dado){
    const div = document.createElement('div')
    for (let i = 0; i < quant; i++) {
        const rol = document.createElement('span')
        rol.innerHTML = `${roll(dado)} `
        div.appendChild(rol)
    }
    return div
}


const typeDado = document.getElementById('dado')
const qtdDado = document.getElementById('quantidade')
const buttonSubmit = document.getElementById('submit')
const result = document.getElementById('resultado')

buttonSubmit.onclick = (e) => {
    e.preventDefault();
    const dado = parseInt(typeDado.value);
    const quant = parseInt(qtdDado.value);
    const x = qtd(quant,dado);
    result.innerHTML = `${x.innerHTML}`;

    typeDado.value = ''
    qtdDado.value = ''

}






