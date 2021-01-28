const bd = ["Texto", "Willim", "Ricardo"
]
let life = 5
let letra = ''

const escolhido = bd[Math.floor(Math.random() * bd.length)];





function verificaLetra(letra){
    if( escolhido.indexOf(letra) == -1 ){
        life-=1
    }else{
        console.log("Achei")
    }
}

