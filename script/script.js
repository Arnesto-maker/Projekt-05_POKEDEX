function init() {
    renderAllCards();
}

function showCardDetails(index) {
    document.getElementById('modal').classList.remove("displayNone");
    document.getElementById('modal').classList.add("displayFlex");
    document.getElementById('card'+ index).classList.add("borderWhiteActive");
    document.getElementById('modal').innerHTML = createDetailCards(index);
    getMainAttribute(index);
}

function closeModal(index) {
    document.getElementById('modal').classList.remove("displayFlex");
    document.getElementById('modal').classList.add("displayNone");
    document.getElementById('card'+ index).classList.remove("borderWhiteActive");
}

function getMainAttribute(index) {
    document.getElementById('main'+index).classList.add("active");
    document.getElementById('stats'+index).classList.remove("active");
    document.getElementById('evoChain'+index).classList.remove("active");
    document.getElementById('cardAttributes').innerHTML = setMainAttribute(index);
}

function getStatsAttribute(index) {
    document.getElementById('main'+index).classList.remove("active");
    document.getElementById('stats'+index).classList.add("active");
    document.getElementById('evoChain'+index).classList.remove("active");
    document.getElementById('cardAttributes').innerHTML = setStatsAttribute(index);
}

function getEvolutionChain(index) {
    document.getElementById('main'+index).classList.remove("active");
    document.getElementById('stats'+index).classList.remove("active");
    document.getElementById('evoChain'+index).classList.add("active");
    document.getElementById('cardAttributes').innerHTML = setEvolutionChain(index);
}

