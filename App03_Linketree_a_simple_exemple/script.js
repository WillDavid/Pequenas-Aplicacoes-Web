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
        nameLink: "Bug Pop Podcast",
        link: "https://open.spotify.com/show/58MEbkzLElWW0Klk1sqk1G"
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
    divCard.innerHTML = `<a href="${links[i].link}" id="link" target="_blank"><button><h2 id="nameLink">${links[i].nameLink}</h2></button></a>`;
    container.appendChild(divCard)
}

const body = document.querySelector('body');
randomColorBody(body)

function randomColorBody(body){

   
    const x =  Math.floor(Math.random() * (5 - 1) ) + 1;
    
    if(x == 1){
        body.style.backgroundImage = "url('https://giffiles.alphacoders.com/209/209343.gif')"
    }else if(x== 2){
        body.style.backgroundImage = "url('https://www.themasterpicks.com/wp-content/uploads/2020/04/22b22287602523.5dbd29081561d.gif')"
    }else if(x == 3){
        body.style.backgroundImage = "url('https://steamuserimages-a.akamaihd.net/ugc/957473855117891289/F7A5B263CDFB96298115BD0134A0D3A437D2F956/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')"
    }else {
        body.style.backgroundImage = "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f4b50571097767.5bb9fee9d515c.gif')"
    }
}





