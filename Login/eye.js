document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm'); // ID do formulário
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            emailError.textContent = 'Digite um e-mail válido';
            emailError.classList.add('show'); // Mostra a mensagem de erro
            emailField.classList.add('error'); // Adiciona classe de erro
            return false;
        } else {
            emailError.classList.remove('show'); // Esconde a mensagem de erro
            emailField.classList.remove('error'); // Remove a classe de erro
            return true;
        }
    }


    form.addEventListener('submit', (event) => {
        let valid = true;

        valid &= validateEmail();
        valid &= validatePassword();
        
        if (!valid) {
            event.preventDefault(); // Impede o envio do formulário se a validação falhar
        }
    });

    // Toggle password visibility
    const togglePassword = document.getElementById('toggle-password');

    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                togglePassword.src = 'images/olho_aberto.png';
            } else {
                passwordField.type = 'password';
                togglePassword.src = 'images/olho_fechado.png';
            }
        });
    }
});