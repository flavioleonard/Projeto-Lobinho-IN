const itensPorPagina = 4;
let paginaAtual = 1;

function lobosNaoAdotados() {
    let lobos = JSON.parse(localStorage.getItem('lobos'));
    let lobosNaoAdotados = lobos.filter(lobo => lobo.adotado === false);
    return lobosNaoAdotados
}

function exibirItens() {
    const container = document.querySelector('.show-lobos');
    container.innerHTML = '';

    const lobos = lobosNaoAdotados();
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const itensPagina = lobos.slice(inicio, fim);

    container.innerHTML = `
                    <div class="lobo lobo-esquerda">
                    <div class="secao-1">
                        <img class="icone-lobo" src="${itensPagina[0].imagem}">
                    </div>
                    <div class="secao-2">
                        <div class="secao-2-1">
                            <div class="secao-2-1-1">
                                <h2>${itensPagina[0].nome}</h2>
                                <p>Idade: ${itensPagina[0].idade} anos</p>
                            </div>
                            <div class="secao-2-1-2">
                                <button>Adotar</button>
                            </div>
                        </div>
                        <div class="secao-2-2">
                            <p>${itensPagina[0].descricao}</p>
                        </div>
                    </div>
                </div>
                <div class="lobo lobo-direita">
                    <div class="secao-1">
                        <img class="icone-lobo" src="${itensPagina[1].imagem}">
                    </div>
                    <div class="secao-2">
                        <div class="secao-2-1">
                            <div class="secao-2-1-1">
                                <h2>${itensPagina[1].nome}</h2>
                                <p>Idade: ${itensPagina[1].idade} anos</p>
                            </div>
                            <div class="secao-2-1-2">
                                <button>Adotar</button>
                            </div>
                        </div>
                        <div class="secao-2-2">
                            <p>${itensPagina[1].descricao}</p>
                        </div>
                    </div>
                </div>
                <div class="lobo lobo-esquerda">
                    <div class="secao-1">
                        <img class="icone-lobo" src="${itensPagina[2].imagem}">
                    </div>
                    <div class="secao-2">
                        <div class="secao-2-1">
                            <div class="secao-2-1-1">
                                <h2>${itensPagina[2].nome}</h2>
                                <p>Idade: ${itensPagina[2].idade} anos</p>
                            </div>
                            <div class="secao-2-1-2">
                                <button>Adotar</button>
                            </div>
                        </div>
                        <div class="secao-2-2">
                            <p>${itensPagina[2].descricao}</p>
                        </div>
                    </div>
                </div>
                <div class="lobo lobo-direita">
                    <div class="secao-1">
                        <img class="icone-lobo" src="${itensPagina[3].imagem}">
                    </div>
                    <div class="secao-2">
                        <div class="secao-2-1">
                            <div class="secao-2-1-1">
                                <h2>${itensPagina[3].nome}</h2>
                                <p>Idade: ${itensPagina[3].idade} anos</p>
                            </div>
                            <div class="secao-2-1-2">
                                <button>Adotar</button>
                            </div>
                        </div>
                        <div class="secao-2-2">
                            <p>${itensPagina[3].descricao}</p>
                        </div>
                    </div>
                </div>`;
}

function exibirPaginacao() {
    const controle = document.getElementById('controle-paginacao');
    controle.innerHTML = '';

    const lobos = lobosNaoAdotados();
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

exibirItens();
exibirPaginacao();