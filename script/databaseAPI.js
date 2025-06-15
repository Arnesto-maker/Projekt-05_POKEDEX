attributeURL = [
    'https://pokeapi.co/api/v2/pokemon/1',
    'https://pokeapi.co/api/v2/pokemon/2',
    'https://pokeapi.co/api/v2/pokemon/3',
    'https://pokeapi.co/api/v2/pokemon/4',
    'https://pokeapi.co/api/v2/pokemon/5',
    'https://pokeapi.co/api/v2/pokemon/6',
    'https://pokeapi.co/api/v2/pokemon/7',
    'https://pokeapi.co/api/v2/pokemon/8',
    'https://pokeapi.co/api/v2/pokemon/9',
    'https://pokeapi.co/api/v2/pokemon/10',
    'https://pokeapi.co/api/v2/pokemon/11',
    'https://pokeapi.co/api/v2/pokemon/12',
    'https://pokeapi.co/api/v2/pokemon/13',
    'https://pokeapi.co/api/v2/pokemon/14',
    'https://pokeapi.co/api/v2/pokemon/15',
    'https://pokeapi.co/api/v2/pokemon/16',
    'https://pokeapi.co/api/v2/pokemon/17',
]

evolutionURL = [
    'https://pokeapi.co/api/v2/evolution-chain/1',
    'https://pokeapi.co/api/v2/evolution-chain/1',
    'https://pokeapi.co/api/v2/evolution-chain/1',
    'https://pokeapi.co/api/v2/evolution-chain/2',
    'https://pokeapi.co/api/v2/evolution-chain/2',
    'https://pokeapi.co/api/v2/evolution-chain/2',
    'https://pokeapi.co/api/v2/evolution-chain/3',
    'https://pokeapi.co/api/v2/evolution-chain/3',
    'https://pokeapi.co/api/v2/evolution-chain/3',
    'https://pokeapi.co/api/v2/evolution-chain/4',
    'https://pokeapi.co/api/v2/evolution-chain/4',
    'https://pokeapi.co/api/v2/evolution-chain/4',
    'https://pokeapi.co/api/v2/evolution-chain/5',
    'https://pokeapi.co/api/v2/evolution-chain/5',
    'https://pokeapi.co/api/v2/evolution-chain/5',
    'https://pokeapi.co/api/v2/evolution-chain/6',
    'https://pokeapi.co/api/v2/evolution-chain/6',
    
]


function renderCards(card) {
    document.getElementById('mainContent').innerHTML = " ";
    for (let index = 0; index < card.length; index++) {
        document.getElementById('mainContent').innerHTML += createCards(card[index],index);
    }
}

async function fetchDataFromAPI(attributeURL, evolutionURL) {
    let responseAtrribute = await fetch(attributeURL);
    let responseEvolutionChain = await fetch(evolutionURL);
    let responseAtrributeAsJson = await responseAtrribute.json();
    let responseEvolutionChainAsJson = await responseEvolutionChain.json();
    const card = {
        name : responseAtrributeAsJson.forms[0].name,
        typ:    typeOfPokemon(
            responseAtrributeAsJson.types[0].type.name,
            responseAtrributeAsJson.types[1] ?.type ?.name ?? 'none'
        ),
        main_attr:  main_attr(
            responseAtrributeAsJson.height,
            responseAtrributeAsJson.weight,
            responseAtrributeAsJson.base_experience
        ),
        stats_attr: stats_attr(
            responseAtrributeAsJson.stats[0].base_stat,
            responseAtrributeAsJson.stats[1].base_stat,
            responseAtrributeAsJson.stats[2].base_stat,
            responseAtrributeAsJson.stats[3].base_stat,
            responseAtrributeAsJson.stats[5].base_stat
        ),
        evo_chain_attr: evo_chain_attr(
            responseEvolutionChainAsJson.chain.species.name,
            responseEvolutionChainAsJson.chain.evolves_to[0].species.name,
            responseEvolutionChainAsJson.chain.evolves_to[0].evolves_to[0] ?.species ?.name ?? 'none'
        )
    }
    return card
    
}
async function renderAllCards() {
        let promises = [];
        for (let index = 0; index < attributeURL.length; index++) {
            promises.push(fetchDataFromAPI(attributeURL[index], evolutionURL[index]));
        }
        pokeCards =  await Promise.all(promises);
        renderCards(pokeCards)
}


function typeOfPokemon(a,b) {
    const typeOfPokemon ={
        typ01 : a,
        typ02 : b
    }
    return typeOfPokemon;
}

function main_attr(a, b, c) {
    const mainAttribute = {
        height: a,
        weight: b,
        baseExp: c,
    };
    return mainAttribute;
}

function stats_attr(a, b, c, d, e) {
    const statsAttribute = {
        hp: a,
        attack: b,
        defence: c,
        specialAttack: d,
        speed:e
    }
    return  statsAttribute
}
function evo_chain_attr(a,b,c) {
    const evolutionChain ={
        first:a,
        second:b,
        third:c
    }
    return evolutionChain
}