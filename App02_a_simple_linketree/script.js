const links = [
    {
        title: "Github",
        link: "https://github.com/WillDavid"
    },

    {
        title: "Linkedin",
        link: "https://www.linkedin.com/in/wdma"
    },

    {
        title: "Twitter",
        link: "https://twitter.com/UiuDavid"
    }
];

const cards = document.getElementById('cards');
mostrarCards()


function mostrarCards(){
    for(let i=0;i<links.length;i++){

        const div = document.createElement('div');
        div.className = 'card';

        const h3 = document.createElement('h3');
        h3.innerHTML = links[i].title;

        const a = document.createElement('a');
        a.href = links[i].link;
        a.text = links[i].title;

        const button = document.createElement('button');



     

        button.appendChild(a)

        div.appendChild(button)


        cards.appendChild(div)



    }
}
