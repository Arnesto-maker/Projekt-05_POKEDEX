function renderCards(card) {
    document.getElementById('mainContent').innerHTML = " ";
    for (let index = 0; index < card.length; index++) {
        document.getElementById('mainContent').innerHTML += createCards(card[index],index);
    }
}

async function createURLArray(number) {
    let promises = [];
    for (let index = 0; index < number; index++) {
        promises.push(fetchAttributeURl(index));
    }
    attributeURL = await Promise.all(promises)
    return attributeURL;
}

async function fetchAttributeURl(index) {
    const responseAllPokemon = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0');
    const responseAllPokemonAsJson = await responseAllPokemon.json();
    return responseAllPokemonAsJson.results[index].url ;
    
}

async function createEvolutionUrlArray() {
    let promises = [];
    for (let index = 0; index < attributeURL.length; index++) {
        promises.push( fetchEvolutionUrl(attributeURL[index]))
    }
    evolutionURL = await Promise.all(promises);
    return(evolutionURL);
}

async function fetchEvolutionUrl(attributeURL) {
    const responseAttribute = await fetch(attributeURL)
    const responseAttributeAsJson = await responseAttribute.json();
    let id = responseAttributeAsJson.id;
    const responsePokemonSpecies = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + id)
    const responsePokemonSpeciesAsJson = await responsePokemonSpecies.json()
    return responsePokemonSpeciesAsJson.evolution_chain.url ;
}

async function fetchDataFromAPI(attributeURL, evolutionURL) { 
    let responseAtrribute = await fetch(attributeURL);
    let responseAtrributeAsJson = await responseAtrribute.json();
    let responseEvolutionChain = await fetch(evolutionURL);
    let responseEvolutionChainAsJson = await responseEvolutionChain.json();
    const card = {
        id   : responseAtrributeAsJson.id,
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
            responseEvolutionChainAsJson.chain ?.species ?.name ?? null,
            responseEvolutionChainAsJson.chain ?.evolves_to[0] ?.species ?.name ?? null,
            responseEvolutionChainAsJson.chain ?.evolves_to[0] ?.evolves_to[0] ?.species ?.name ?? null
        )
    }
    return card
}

async function renderAllCards(number) {
        const loader = document.getElementById('loader-container');
        loader.classList.remove('loader-hidden');
        let promises = []
        attributeURL = await createURLArray(number)
        evolutionURL = await createEvolutionUrlArray()
        for (let index = 0; index < attributeURL.length; index++) {
            promises.push(fetchDataFromAPI(attributeURL[index], evolutionURL[index]));
        }
        pokeCards =  await Promise.all(promises);
        loader.classList.add('loader-hidden');
        renderCards(pokeCards);
        return    
}

function searchFunction() {
    let searchKey = document.getElementById('searchInput').value.toLowerCase();
    if (searchKey.length>=3) {
            let filteredCards = pokeCards.filter(card => { return card.name.toLowerCase().includes(searchKey)});
            renderCards(filteredCards);
    }else {
            renderCards(pokeCards);
        }
    return 
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