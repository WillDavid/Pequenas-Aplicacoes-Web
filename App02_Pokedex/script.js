const pokedex = [
    {
        id: 1,
        pokemonName: "Bulbasaur"
    },

    {
        id: 2,
        pokemonName: "Ivysaur"
    },

    {
        id: 3,
        pokemonName: "Venusaur"
    }
]



function buscaId(busca){
    for (let i=0; i<pokedex.length;i++){
        if(pokedex[i].id == busca){
            return pokedex[i].pokemonName
        }
    }
}

const result = buscaId(2)

console.log(result)