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

// Adotar lobo

function adotarLobo(detalhesLobo,loboId) {
    let nomeAdocao = document.querySelector(".nome-adocao").value
    let idadeAdocao = document.querySelector(".idade-adocao").value
    let emailAdocao = document.querySelector(".email-adocao").value
    
    let loboAdotado = {
        id: loboId,
        nome: detalhesLobo.nome,
        idade: detalhesLobo.idade,
        descricao: detalhesLobo.descricao,
        imagem: detalhesLobo.imagem,
        adotado: true,
        nomeDono: nomeAdocao,
        idadeDono: idadeAdocao,
        emailDono: emailAdocao
    };

    let lobos = JSON.parse(localStorage.getItem('lobos'));
    let index = loboId - 1
    if (lobos[index].adotado === true) {
        alert("Esse lobo já foi adotado.")
    } else {
        lobos[index] = loboAdotado;
        localStorage.setItem('lobos', JSON.stringify(lobos));

        document.querySelector('.nome-adocao').value = '';
        document.querySelector('.idade-adocao').value = '';
        document.querySelector('.email-adocao').value = '';
        alert("Lobo adotado com sucesso!")
        window.location.href = '/index.html';
    };
}

let botaoAdotar = document.querySelector('.adotarBtn');
botaoAdotar.addEventListener('click', () => adotarLobo(detalhesLobo, loboId));