// INICIALIZAR LOCAL STORAGE
async function inicializarLocalStorage() {
    const response = await fetch('lobinho.json');
    const lobos = await response.json();
    localStorage.setItem('lobos', JSON.stringify(lobos));
}

if (!localStorage.getItem('lobos')) {
    inicializarLocalStorage();
}

//PÁGINA ADICIONAR LOBINHO

async function adicionarLobo() {
    let nome = document.querySelector('#nome-lobo').value;
    let idade = document.querySelector('#idade-lobo').value;
    let imagem = document.querySelector('#link-foto').value;
    let descricao = document.querySelector('#descricao').value;

    let lobos = JSON.parse(localStorage.getItem('lobos')) || [];

    let novoId = lobos.length + 1;

    let novoLobo = {
        id: novoId,
        nome: nome,
        idade: idade,
        descricao: descricao,
        imagem: imagem,
        adotado: false,
        nomeDono: null,
        idadeDono: null,
        emailDono: null
    };

    lobos.push(novoLobo);

    localStorage.setItem('lobos', JSON.stringify(lobos));

    document.querySelector('#nome-lobo').value = '';
    document.querySelector('#idade-lobo').value = '';
    document.querySelector('#link-foto').value = '';
    document.querySelector('#descricao').value = '';

    alert('Lobo adicionado com sucesso!');
}

let botaoSalvar = document.querySelector('#btn-enviar');
botaoSalvar.addEventListener('click', adicionarLobo);

