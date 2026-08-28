const url = "https://overfast-api.tekrop.fr/heroes";

async function pegarDados() {
    const resp = await fetch(url)
    if (resp.status == 200) {
        const obj = await resp.json();
        console.log(obj)
    }
}

pegarDados();