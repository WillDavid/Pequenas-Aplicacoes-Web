const bd = ["Texto", "Ricardo"
]
let life = 5
let letra = ''

const escolhido = bd[Math.floor(Math.random() * bd.length)];

function verificaLetra(letra, escolhido){
    if( escolhido.indexOf(letra) == -1 ){
        life-=1
    }else{
        console.log("Achei")
    }
}

letra = document.getElementById('inputLetra')
const form = document.getElementById('form')


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(letra.value)
    console.log(escolhido)
    verificaLetra(letra.innerHTML, escolhido)
})




