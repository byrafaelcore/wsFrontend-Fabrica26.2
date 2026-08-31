const url = "https://overfast-api.tekrop.fr/heroes";

async function pegarDadosApi() {

    const respostaApi = await fetch(url);
    const dadosDosHerois = await respostaApi.json();
    
    mostrarHerois(dadosDosHerois);
    pesquisarHerois(dadosDosHerois);
}

function mostrarHerois(listaDosHerois) {

    const containerPersonagens = document.querySelector(".container-personagens");

    containerPersonagens.innerHTML = "";
    
    listaDosHerois.forEach(({ portrait, role, name, subrole }) => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${portrait}" alt="${name}">
            <h3>${name}</h3>
            <p>${role}</p>
            <p>${subrole}</p>
        `;

        containerPersonagens.appendChild(card);
}
    )}

function pesquisarHerois(dadosDosHerois) {
    const pesquisa = document.querySelector("#pesquisa");
    const botaoPesquisa = document.querySelector(".botao-pesquisa");

    botaoPesquisa.addEventListener("click", (evento) => {
        evento.preventDefault();
        const textoDigitado = pesquisa.value.toLowerCase();
        const heroisFiltrados = dadosDosHerois.filter(heroi => {
            return heroi.name.toLowerCase().includes(textoDigitado);
        });
        
        mostrarHerois(heroisFiltrados);
    });
}

pegarDadosApi();