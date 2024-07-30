async function inicializarLocalStorage() {
    try {
        const response = await fetch('lobinhos.json');
        if (!response.ok) {
            throw new Error('Falha ao carregar o arquivo JSON');
        }
        const lobos = await response.json();
        localStorage.setItem('lobos', JSON.stringify(lobos));
        renderizarLobos(lobos);
    } catch (error) {
        console.error('Erro ao inicializar o localStorage:', error);
    }
}

function renderizarLobos(lobos) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Limpa o container antes de renderizar

    lobos.forEach(lobo => {
        const loboElement = document.createElement('div');
        loboElement.className = 'lobo';
        loboElement.innerHTML = `
            <h2>${lobo.nome}</h2>
            <img src="${lobo.imagem}" alt="${lobo.nome}">
            <p>Idade: ${lobo.idade}</p>
            <p>${lobo.descricao}</p>
            <p>Adotado: ${lobo.adotado ? 'Sim' : 'Não'}</p>
            ${lobo.adotado ? `
                <p>Nome do Dono: ${lobo.nomeDono}</p>
                <p>Idade do Dono: ${lobo.idadeDono}</p>
                <p>Email do Dono: ${lobo.emailDono}</p>
            ` : ''}
        `;
        container.appendChild(loboElement);
    });
}

if (!localStorage.getItem('lobos')) {
    inicializarLocalStorage();
} else {
    const lobos = JSON.parse(localStorage.getItem('lobos'));
    renderizarLobos(lobos);
}

