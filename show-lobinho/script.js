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

const showLobinho = document.querySelector('.main');
showLobinho.innerHTML = `
<h1>${detalhesLobo.nome}</h1>
<section class="show-lobinho">
    <div class="secao-esquerda">
        <img src="${detalhesLobo.imagem}" alt="">
        <div class="botoes">
            <button class="adotar" data-id="${detalhesLobo.id}">ADOTAR</button>
            <button class="excluir">EXCLUIR</button>
        </div>
    </div>
    <p>${detalhesLobo.descricao}</p>
</section>`;

document.querySelectorAll('.adotar').forEach(button => {
    button.addEventListener('click', function() {
        const loboId = this.getAttribute('data-id');
        window.location.href = `/adotar-lobo/?id=${loboId}`;
    });
});

// Deletar lobo da lista
function deletarLobo(id) {
    let lobos = JSON.parse(localStorage.getItem('lobos'));
    lobos = lobos.filter(lobo => lobo.id !== parseInt(id));
    localStorage.setItem('lobos', JSON.stringify(lobos));
    alert('Lobo excluído com sucesso!');
    window.location.href = '/lista-de-lobinhos';
}

let botaoExcluir = document.querySelector('.excluir');
botaoExcluir.addEventListener('click', () => deletarLobo(loboId));