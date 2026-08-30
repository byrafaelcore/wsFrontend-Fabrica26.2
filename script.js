const url = "https://overfast-api.tekrop.fr/heroes";

async function pegarDadosApi() {
    const respostaApi = await fetch(url)
    const dadosDosHerois = await respostaApi.json();
    console.log(dadosDosHerois)
}

pegarDadosApi();

