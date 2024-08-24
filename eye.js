document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('toggle-password');

    togglePassword.addEventListener('click', function () {
        // Verifica o tipo do input e alterna entre "password" e "text"
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Alterna a imagem do ícone
        this.src = type === 'password' ? 'images/olho_fechado.png' : 'images/olho_aberto.png';
    });
});
