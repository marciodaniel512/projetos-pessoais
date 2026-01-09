function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    // Validação simples de usuário/senha
    if (username === 'Luis Cassela Maia' && password === 'password') {
        localStorage.setItem('username', username); // Armazena o nome do usuário
        window.location.href = 'html/welcome.html'; // Redireciona para a tela de boas-vindas
    } else {
        errorMsg.textContent = 'Usuário ou senha incorretos.';
    }
}