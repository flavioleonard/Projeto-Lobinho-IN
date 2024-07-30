// Personalizar página de acordo com o ID do lobo
function obterParametroURL(nome) {
    const url = new URL(window.location.href);
    return url.searchParams.get(nome);
} 

function obterDetalhesLobo(id) {
    let lobos = JSON.parse(localStorage.getItem('lobos'));
    let lobo = lobos.find(lobo => lobo.id === parseInt(id, 10));
    return lobo;
}

const loboId = obterParametroURL('id');
const detalhesLobo = obterDetalhesLobo(loboId);

let personalizarPagina = document.querySelector('.title')
personalizarPagina.innerHTML = `
                <img class='image' src=${detalhesLobo.imagem}">
                <div class="adote">
                    <h1>Adote o(a) ${detalhesLobo.nome}</h1>
                    <p>ID: ${detalhesLobo.id}</p>
                </div> `;
