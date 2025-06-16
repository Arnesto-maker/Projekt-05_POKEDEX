function setMainAttribute(index) {
    return `        <div class="card-stats" id="main ${index}">
                    <div class="row">
                        <div class="rowData">Height</div>
                        <div>:</div>
                        <div id="height${index}" class="rowData">${(pokeCards[index].main_attr.height*0.1).toFixed(1)} m</div>
                    </div>
                    <div class="row">
                        <div class="rowData">Weight</div>
                        <div >:</div>
                        <div id="weight${index}" class="rowData">${(pokeCards[index].main_attr.weight*0.1).toFixed(1)} kg</div>
                    </div>
                    <div class="row">
                        <div class="rowData">Base-experience</div>
                        <div>:</div>
                        <div id="baseExp${index}" class="rowData">${pokeCards[index].main_attr.baseExp}</div>
                    </div> `;
}

function setStatsAttribute(index) {
    return `        <div class="card-Attributes" id="stats${index}">
                    <div class="row">
                        <div class="rowData">HP</div>
                        <div>:</div>
                        <div id="height${index}" class="rowData">
                            <div class="width25PX">${pokeCards[index].stats_attr.hp}</div>
                            <div class="health-bar-rahmen">
                                    <div class="health-bar-fuellung  ${pokeCards[index].typ.typ01}"   
                                    style="width:${(pokeCards[index].stats_attr.hp/290)*100}px "  ></div>
                            </div>
                            <div>300</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="rowData">Attack</div>
                        <div>:</div>
                        <div id="weight${index}" class="rowData">
                           <div class="width25PX">${pokeCards[index].stats_attr.attack}</div>
                            <div class="health-bar-rahmen">
                                    <div class="health-bar-fuellung  ${pokeCards[index].typ.typ01}"   
                                    style="width:${(pokeCards[index].stats_attr.attack/290)*100}px "  ></div>
                            </div>
                            <div>300</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="rowData">defense</div>
                        <div >:</div>
                        <div id="defence${index}" class="rowData">
                           <div class="width25PX">${pokeCards[index].stats_attr.defence}</div>
                            <div class="health-bar-rahmen">
                                    <div class="health-bar-fuellung  ${pokeCards[index].typ.typ01}"   
                                    style="width:${(pokeCards[index].stats_attr.defence/290)*100}px "  ></div>
                            </div>
                            <div>300</div>
                        </div>
                    </div>
                        <div class="row">
                        <div class="rowData">special-Attack</div>
                        <div>:</div>
                        <div id="specialAttack${index}" class="rowData">
                           <div class="width25PX">${pokeCards[index].stats_attr.specialAttack}</div>
                            <div class="health-bar-rahmen">
                                    <div class="health-bar-fuellung  ${pokeCards[index].typ.typ01}"   
                                    style="width:${(pokeCards[index].stats_attr.specialAttack/290)*100}px "  ></div>
                            </div>
                            <div>300</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="rowData">speed</div>
                        <div>:</div>
                        <div id="speed${index}" class="rowData">
                            <div class="width25PX">${pokeCards[index].stats_attr.speed}</div>
                            <div class="health-bar-rahmen">
                                    <div class="health-bar-fuellung  ${pokeCards[index].typ.typ01}"   
                                    style="width:${(pokeCards[index].stats_attr.speed/290)*100}px "  ></div>
                            </div>
                            <div>300</div>
                        </div>
                    </div> `;
}

function setEvolutionChain(index){
    return `        <div class="evo-chain-box">
                    <div id="firstForm${index}" class="evo-chain-image-box">
                        <img src="assets/img/card-content/${pokeCards[index].evo_chain_attr.first}.png" alt="firstForm01Bulbasaur" class="evo-chain-img">
                        <div id="firstForm01-name">${pokeCards[index].evo_chain_attr.first}</div>
                    </div>
                    <div class="arrow-right">
                        <img src="assets/img/icon/arrow-right-3098.svg" alt="" class="evo-chain-arrow">
                    </div>
                    <div id="secondForm${index}" class="evo-chain-image-box">
                        <img src="assets/img/card-content/${pokeCards[index].evo_chain_attr.second}.png" alt="secondForm01Bulbasaur" class="evo-chain-img">
                        <div id="secondForm01-name">${pokeCards[index].evo_chain_attr.second}</div>
                    </div>
                    ${pokeCards[index].evo_chain_attr.third ? `
                    <div class="arrow-right">
                    <img src="assets/img/icon/arrow-right-3098.svg" class="evo-chain-arrow">
                    </div>
                    <div class="evo-chain-image-box">
                    <img src="assets/img/card-content/${pokeCards[index].evo_chain_attr.third}.png" class="evo-chain-img">
                    <div>${pokeCards[index].evo_chain_attr.third}</div>
                </div>
            `:''}
                    </div> `;
}

function createCards(card,index) {
    return `    <div class="card" id="card${card.id-1}" onclick="showCardDetails(${card.id-1})">
                <div class="card-header">
                    <div class="id_name">#${card.id}</div>
                    <div class="Name">${(card.name).toUpperCase()}</div>
                </div>
                <div class="card-body ${card.typ.typ01}"><img src="assets/img/card-content/${card.name}.png" 
                alt="${card.name}ID${Number(index + 1)} "
                class="card-body-img }"></div>
                <div class="card-footer" id="cardFooter">
                    <img src="assets/img/card-content/typ-icons/${card.typ.typ01}.svg" alt="typ01" class="card-footer-type">
                    <img src="assets/img/card-content/typ-icons/${card.typ.typ02}.svg" alt="typ02" class="card-footer-type">
                </div>
                </div>`;
}

function createDetailCards(index) {
    return  `<div class="detailed-card">
            <div class="detailed-card-header">
                <div class="detailed-card-id" id="detailedCard${index}">
                    #${Number(index+1)}
                </div>
                <div class="detailed-card-name">
                    ${pokeCards[index].name}
                </div>
                <div class="detailed-card-close-button" onclick="closeModal(${index})">
                    <img src="assets/img/icon/x-10327 (1).png" alt="detailed close button"
                        class="detailed-card-close-button-img">
                </div>
            </div>
            <div class="detailed-card-body ${pokeCards[index].typ.typ01} ">
                <img src="assets/img/card-content/${pokeCards[index].name}.png" alt="${pokeCards[index].name}ID${Number(index+1)}
                " class="card-body-img">
            </div>
            <div class="detailed-card-footer">
                <img src="assets/img/card-content/typ-icons/${pokeCards[index].typ.typ01}.svg" alt="typ01" class="card-footer-type">
                <img src="assets/img/card-content/typ-icons/${pokeCards[index].typ.typ02}.svg" alt="typ02" class="card-footer-type">
            </div>
            <div class="detailed-card-sub-info-nav">
                <div class="detailed-card-nav" onclick="getMainAttribute(${index})" id="main${index}">
                    main
                </div>
                <div class="detailed-card-nav " onclick="getStatsAttribute(${index})" id="stats${index}">
                    stats
                </div>
                <div class="detailed-card-nav" onclick="getEvolutionChain(${index})" id="evoChain${index}">
                    evo-chain
                </div>
            </div>
            <div class="detailed-card-sub-info" id="cardAttributes"></div>`;
    
}