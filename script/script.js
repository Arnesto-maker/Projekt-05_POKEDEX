function init() {
    renderAllCards(40);
}

let called = 2;
async function addMorePokemons() {
    if (called <= 5) {
        await renderAllCards(called * 40)
        called++
    } else {
        alert('maximum Pokemon reached')
        called == 2;
    }
}

function showCardDetails(index) {
    document.getElementById('modal').classList.remove("displayNone");
    document.getElementById('modal').classList.add("displayFlex");
    document.getElementById('modal').innerHTML = createDetailCards(index);
    const detailedCard = document.getElementById('detailedCard');
    detailedCard.addEventListener('click', function (event) {
        event.stopPropagation();
    })
    getMainAttribute(index);
}

function closeModal(index) {
    document.getElementById('modal').classList.remove("displayFlex");
    document.getElementById('modal').classList.add("displayNone");
    document.getElementById('card' + index).classList.remove("borderWhiteActive");
}

function closeModalEvent() {
    document.getElementById('modal').classList.remove("displayFlex");
    document.getElementById('modal').classList.add("displayNone");
}




function getMainAttribute(index) {
    document.getElementById('main' + index).classList.add("active");
    document.getElementById('stats' + index).classList.remove("active");
    document.getElementById('evoChain' + index).classList.remove("active");
    document.getElementById('cardAttributes').innerHTML = setMainAttribute(index);
}

function getStatsAttribute(index) {
    document.getElementById('main' + index).classList.remove("active");
    document.getElementById('stats' + index).classList.add("active");
    document.getElementById('evoChain' + index).classList.remove("active");
    document.getElementById('cardAttributes').innerHTML = setStatsAttribute(index);
}

function getEvolutionChain(index) {
    document.getElementById('main' + index).classList.remove("active");
    document.getElementById('stats' + index).classList.remove("active");
    document.getElementById('evoChain' + index).classList.add("active");
    document.getElementById('cardAttributes').innerHTML = setEvolutionChain(index);
}

