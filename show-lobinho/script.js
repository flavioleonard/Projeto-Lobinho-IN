//PERSONALIZAR PÁGINA DE ACORDO COM ID DO LOBO

function obterParametroURL(nome) {
    const url = new URL(window.location.href);
    return url.searchParams.get(nome);
}

function obterDetalhesLobo(id) {
    let lobos = JSON.parse(localStorage.getItem('lobos'));
    return lobos[id-1];
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
            <button class="adotar" onclick="window.location.href='/adotar-lobinho';">ADOTAR</button>
            <button class="excluir">EXCLUIR</button>
        </div>
    </div>
    <p>${detalhesLobo.descricao}</p>
</section>`;


//DELETANDO LOBO DA LISTA

function deletarLobo(id) {
    let lobos = JSON.parse(localStorage.getItem('lobos'));
    lobos = lobos.filter((lobo, index) => index !== id-1);
    localStorage.setItem('lobos', JSON.stringify(lobos));
    alert('Lobo excluido com sucesso!');
    window.location.href = '/lista-de-lobinhos';
}

let botaoExcluir = document.querySelector('.excluir');
botaoExcluir.addEventListener('click', () => deletarLobo(loboId));
