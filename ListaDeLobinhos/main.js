async function inicializarLocalStorage() {
    try {
        const response = await fetch('lobinhos.json');
        if (!response.ok) {
            throw new Error(`Erro ao buscar lobinho.json: ${response.statusText}`);
        }
        const lobos = await response.json();
        localStorage.setItem('lobos', JSON.stringify(lobos));
        console.log('Lobos inicializados no localStorage');
    } catch (error) {
        console.error('Erro ao inicializar o localStorage:', error);
    }
}

if (!localStorage.getItem('lobos')) {
    inicializarLocalStorage().then(() => {
        console.log('Inicialização do localStorage concluída');
    }).catch(error => {
        console.error('Erro durante a inicialização do localStorage:', error);
    });
} else {
    console.log('LocalStorage já inicializado');
}

function obterLobosDoLocalStorage() {
    const lobos = localStorage.getItem('lobos');
    return JSON.parse(lobos);
}

function renderizarLobos() {
    const lobos = obterLobosDoLocalStorage();
    const container = document.querySelector('.container');

    lobos.forEach(lobo => {
        const loboDiv = document.createElement('div');
        loboDiv.classList.add('lobo');

        const loboImg = document.createElement('img');
        loboImg.src = lobo.imagem;
        loboImg.alt = lobo.nome;

        const loboInfo = document.createElement('div');
        loboInfo.classList.add('info');

        const adotarButton = document.createElement('button');
        adotarButton.classList.add('btn-primary');
        adotarButton.textContent = 'Adotar';

        const adotadoButton = document.createElement('button');
        adotadoButton.classList.add('btn-secundary');
        adotadoButton.textContent = 'Adotado';

        const loboNome = document.createElement('h2');
        loboNome.textContent = lobo.nome;

        const loboIdade = document.createElement('p');
        loboIdade.textContent = `Idade: ${lobo.idade}`;
        loboIdade.classList.add('idade');

        const loboDescricao = document.createElement('p');
        loboDescricao.textContent = lobo.descricao;
        loboIdade.classList.add('descricao');

        loboInfo.appendChild(loboNome);
        loboInfo.appendChild(loboIdade);
        loboInfo.appendChild(loboDescricao);

        if (lobo.adotado) {
            const loboDono = document.createElement('p');
            loboDono.textContent = `Adotado por: ${lobo.nomeDono}, Idade: ${lobo.idadeDono}, Email: ${lobo.emailDono}`;
            loboInfo.appendChild(loboDono);
            loboDiv.appendChild(adotadoButton);

            
        }
        else {
            loboDiv.appendChild(adotarButton);

        }
        

        loboDiv.appendChild(loboImg);
        loboDiv.appendChild(loboInfo);
        
        container.appendChild(loboDiv);
    });
}

// Chamar a função renderizarLobos após a página carregar
document.addEventListener('DOMContentLoaded', renderizarLobos);
