function pegarData() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const hoje = today.toLocaleDateString();
    document.getElementById('data-cadastro').value = hoje
}    