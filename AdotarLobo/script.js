document.addEventListener('DOMContentLoaded', () => {
    // Obtém a referência ao botão "Adotar"
    const adoteBtn = document.getElementById('adotarBtn');

    adoteBtn.addEventListener('click', (e) => {
        e.preventDefault();  // Previne o comportamento padrão do botão, que pode ser um submit

        // Obtém os valores dos inputs
        const nome = document.querySelector('#input_container .name input').value;
        const idade = document.querySelector('#input_container .age input').value;
        const email = document.querySelector('#input_container .email input').value;

        // Armazena os dados em um objeto
        const dadosAdocao = {
            nome: nome,
            idade: idade,
            email: email
        };

        // Exibe os dados no console (ou processa de outra forma)
        console.log(dadosAdocao);

        // Redireciona para outra página (ou você pode manipular o DOM aqui em vez de redirecionar)
        window.location.href = 'adote.html';
    });
});
