function obterParametroURL(nome) {
    const url = new URL(window.location.href);
    return url.searchParams.get(nome);
}

function obterDetalhesLobo(index) {
    let lobos = JSON.parse(localStorage.getItem('lobos'))
    return lobos[index-1]
}

const loboId = obterParametroURL('index')
const detalhesLobo = obterDetalhesLobo(loboId)

const showLobinho = document.querySelector('.main')
showLobinho.innerHTML = `
<h1>${detalhesLobo.nome}</h1>
<section class="show-lobinho">
    <div class="secao-esquerda">
        <img src="${detalhesLobo.imagem}" alt="">
        <div class="botoes">
            <button class="adotar">ADOTAR</button>
            <button class="excluir">EXCLUIR</button>
        </div>
    </div>
    <p>${detalhesLobo.descricao}</p>
</section>`;