function setMainAttribute(index) {
    return `        <div class="card-stats" id="main ${index}">
                    <div class="row">
                        <div class="rowData">Height</div>
                        <div>:</div>
                        <div id="height${index}" class="rowData">${pokeCards[index].main_attr.height} m</div>
                    </div>
                    <div class="row">
                        <div class="rowData">Weight</div>
                        <div >:</div>
                        <div id="weight${index}" class="rowData">${pokeCards[index].main_attr.weight} kg</div>
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
                            <div class="health-bar-rahmen" 
                            style="width: calc( ( ${pokeCards[index].stats_attr.attack}/ ${pokeCards[index].stats_attr.max_attack}) *400px  );">
                                    <div class="health-bar-fuellung  ${pokeCards[index].typ.typ01}"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="rowData">Attack</div>
                        <div>:</div>
                        <div id="weight${index}" class="rowData">
                           <div class="health-bar-rahmen" 
                           style="width: calc( ( ${pokeCards[index].stats_attr.attack}/ ${pokeCards[index].stats_attr.max_attack}) *400px );">
                                    <div class="health-bar-fuellung  ${pokeCards[index].typ.typ01}"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="rowData">defense</div>
                        <div >:</div>
                        <div id="defence${index}" class="rowData">
                           <div class="health-bar-rahmen" 
                           style="width: calc( ( ${pokeCards[index].stats_attr.defence}/ ${pokeCards[index].stats_attr.max_defence}) *400px);">
                                    <div class="health-bar-fuellung  ${pokeCards[index].typ.typ01}"></div>
                            </div>
                        </div>
                    </div>
                        <div class="row">
                        <div class="rowData">special-Attack</div>
                        <div>:</div>
                        <div id="specialAttack${index}" class="rowData">
                           <div class="health-bar-rahmen" 
                           style="width: calc( ( ${pokeCards[index].stats_attr.specialAttack}/ ${pokeCards[index].stats_attr.max_sp_attack}) *400px);">
                                    <div class="health-bar-fuellung  ${pokeCards[index].typ.typ01}"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="rowData">speed</div>
                        <div>:</div>
                        <div id="speed${index}" class="rowData">
                            <div class="health-bar-rahmen" 
                            style="width: calc( ( ${pokeCards[index].stats_attr.speed}/ ${pokeCards[index].stats_attr.max_speed}) *400px);">
                                    <div class="health-bar-fuellung  ${pokeCards[index].typ.typ01}"></div>
                            </div>
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
                    <div class="arrow-right">
                        <img src="assets/img/icon/arrow-right-3098.svg" alt="" class="evo-chain-arrow">
                    </div>
                    <div id="thirdForm${index}" class="evo-chain-image-box">
                        <img src="assets/img/card-content/${pokeCards[index].evo_chain_attr.third}.png" alt="secondForm01Bulbasaur" class="evo-chain-img">
                        <div id="thirdForm01-name">${pokeCards[index].evo_chain_attr.third}</div>
                    </div>
                    </div> `;
}

function createCards(card,index) {
    return `    <div class="card" id="card${index}" onclick="showCardDetails(${index})">
                <div class="card-header">
                    <div class="id_name">#${Number(index + 1)}</div>
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