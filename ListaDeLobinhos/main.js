// INICIALIZAR LOCAL STORAGE
async function inicializarLocalStorage() {
    const response = await fetch('lobinhos.json');
    const lobos = await response.json();
    localStorage.setItem('lobos', JSON.stringify(lobos));
}

if (!localStorage.getItem('lobos')) {
    inicializarLocalStorage();
}



