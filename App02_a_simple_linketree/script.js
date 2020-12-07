const links = [
    {
        title: "Github",
        info: "Perfil Github",
        link: "https://github.com/WillDavid"
    },

    {
        title: "Linkedin",
        info: "Perfil Linkedin",
        link: "https://www.linkedin.com/in/wdma"
    },

    {
        title: "Twitter",
        info: "Perfil Twitter",
        link: "https://twitter.com/UiuDavid"
    }
];

const cards = document.getElementById('cards');
mostrarCards()


function mostrarCards(){
    for(let i=0;i<links.length;i++){
        const card = document.createElement('h1');
        card.innerHTML = links[i].title;
        cards.appendChild(card);
    }
}
