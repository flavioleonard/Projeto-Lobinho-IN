const itensPorPagina = 4;
let paginaAtual = 1;
let mostrarApenasAdotados = false;

function lobosNaoAdotados() {
    let lobos = JSON.parse(localStorage.getItem('lobos'));
    let lobosNaoAdotados = lobos.filter(lobo => lobo.adotado === false);
    return lobosNaoAdotados;
}

function lobosAdotados() {
    let lobos = JSON.parse(localStorage.getItem('lobos'));
    let lobosAdotados = lobos.filter(lobo => lobo.adotado === true);
    return lobosAdotados;
}

function obterLobos() {
    return mostrarApenasAdotados ? lobosAdotados() : lobosNaoAdotados();
}

function exibirItens() {
    const container = document.querySelector('.show-lobos');
    container.innerHTML = '';

    const lobos = obterLobos();
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const itensPagina = lobos.slice(inicio, fim);

    itensPagina.forEach((lobo, index) => {
        const classeBotao = mostrarApenasAdotados ? 'btn-adotado' : 'btn-adotar';
        const textoBotao = mostrarApenasAdotados ? 'Adotado' : 'Adotar';

        container.innerHTML += `
            <div class="lobo ${index % 2 === 0 ? 'lobo-esquerda' : 'lobo-direita'}">
                <div class="secao-1">
                    <img class="icone-lobo" src="${lobo.imagem}">
                </div>
                <div class="secao-2">
                    <div class="secao-2-1">
                        <div class="secao-2-1-1">
                            <h2>${lobo.nome}</h2>
                            <p>Idade: ${lobo.idade} anos</p>
                        </div>
                        <div class="secao-2-1-2">
                            <button class="${classeBotao}">${textoBotao}</button>
                        </div>
                    </div>
                    <div class="secao-2-2">
                        <p>${lobo.descricao}</p>
                    </div>
                </div>
            </div>`;
    });
}

function exibirPaginacao() {
    const controle = document.getElementById('controle-paginacao');
    controle.innerHTML = '';

    const lobos = obterLobos();
    const totalPaginas = Math.ceil(lobos.length / itensPorPagina);

    if (paginaAtual > 1) {
        const botaoAnterior = document.createElement('button');
        botaoAnterior.textContent = '«';
        botaoAnterior.addEventListener('click', () => {
            paginaAtual--;
            exibirItens();
            exibirPaginacao();
        });
        controle.appendChild(botaoAnterior);
    }

    if (paginaAtual < totalPaginas) {
        const botaoProximo = document.createElement('button');
        botaoProximo.textContent = '»';
        botaoProximo.addEventListener('click', () => {
            paginaAtual++;
            exibirItens();
            exibirPaginacao();
        });
        controle.appendChild(botaoProximo);
    }
}

function filtrarLobos() {
    const lobos = obterLobos();
    const inputPesquisa = document.querySelector('.procurar-lobo').value.toLowerCase();
    const loboFiltrado = lobos.filter((lobo) => lobo.nome.toLowerCase() === inputPesquisa);

    const container = document.querySelector('.show-lobos');
    container.innerHTML = '';

    loboFiltrado.forEach((lobo, index) => {
        const classeBotao = mostrarApenasAdotados ? 'btn-adotado' : 'btn-adotar';
        const textoBotao = mostrarApenasAdotados ? 'Adotado' : 'Adotar';

        container.innerHTML += `
            <div class="lobo ${index % 2 === 0 ? 'lobo-esquerda' : 'lobo-direita'}">
                <div class="secao-1">
                    <img class="icone-lobo" src="${lobo.imagem}">
                </div>
                <div class="secao-2">
                    <div class="secao-2-1">
                        <div class="secao-2-1-1">
                            <h2>${lobo.nome}</h2>
                            <p>Idade: ${lobo.idade} anos</p>
                        </div>
                        <div class="secao-2-1-2">
                            <button class="${classeBotao}">${textoBotao}</button>
                        </div>
                    </div>
                    <div class="secao-2-2">
                        <p>${lobo.descricao}</p>
                    </div>
                </div>
            </div>`;
    });

    document.querySelector('.procurar-lobo').value = '';
}

document.querySelector('.lobosAdotados').addEventListener('change', (event) => {
    mostrarApenasAdotados = event.target.checked;
    paginaAtual = 1;
    exibirItens();
    exibirPaginacao();
});

exibirItens();
exibirPaginacao();

document.querySelector('.btn-procurar').addEventListener('click', filtrarLobos);