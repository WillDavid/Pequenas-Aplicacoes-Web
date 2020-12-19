const links = [
    {
        nameLink: "Linkedin",
        link: "https://www.linkedin.com/in/wdma/"
    },
    {
        nameLink: "Github",
        link: "https://github.com/WillDavid"
    },
    {
        nameLink: "Toca da Coruja Podcast",
        link: "https://open.spotify.com/show/5Lj22JaGFe1HKOeyHes5Ba"
    },
    {
        nameLink: "Twitter",
        link: "https://twitter.com/UiuDavid"
    },
    {
        nameLink: "Instagram",
        link: "https://www.instagram.com/somente_will/"
    },
    {
        nameLink: "Whatsapp",
        link: "https://api.whatsapp.com/send?phone=5592994215985&text=Voc%C3%AA%20est%C3%A1%20mandando%20uma%20mensagem%20para%20William%20David"
    }
];

const container = document.getElementById('container');

for(let i=0;i<links.length;i++){
    const divCard = document.createElement('div');
    divCard.className = "card";
    divCard.innerHTML = `<a href="${links[i].link}" id="link"><button><h2 id="nameLink">${links[i].nameLink}</h2></button></a>`;
    container.appendChild(divCard)
}

const body = document.querySelector('body');
randomColorBody(body)

function randomColorBody(body){
    const x = Math.floor(Math.random() * (3 - 1) ) + 1;
    if(x == 1){
        body.style.background = "linear-gradient(to right, #ff4b1f, #ff9068)";
    }else if(x== 2){
        body.style.background = "linear-gradient(to right, #16BFFD,#CB3066)";
    }
}





