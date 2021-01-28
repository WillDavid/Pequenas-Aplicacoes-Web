const bd = ["Texto", "Willim", "Ricardo"
]
let life = 5


const escolhido = bd[Math.floor(Math.random() * bd.length)];

console.log(escolhido)


let letra = "a"
if( escolhido.indexOf(letra) != -1 ){
    console.log("Achei")
}else{
    console.log("Não achei")
    life-=1
}

