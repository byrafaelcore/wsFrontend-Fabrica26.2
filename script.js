const url = "https://overfast-api.tekrop.fr/heroes";

async function pegarDadosApi() {

    const respostaApi = await fetch(url);
    const dadosDosHerois = await respostaApi.json();
    const container = document.querySelector(".container");
    
    dadosDosHerois.forEach(({ portrait, role, name }) => {

        console.log(portrait);
        console.log(name);
        console.log(role);

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${portrait}" alt="${name}">
            <h3>${name}</h3>
            <p>${role}</p>
        `;

        console.log(portrait);

        container.appendChild(card);
    });
}

pegarDadosApi();