document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('toggle-password');

    togglePassword.addEventListener('click', function () {
      
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        this.src = type === 'password' ? 'images/olho_fechado.png' : 'images/olho_aberto.png';
    });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    var emailField = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    
    if (emailField.value === '') {
        event.preventDefault(); // Impede o envio do formulário
        emailError.style.display = 'block'; // Mostra a mensagem de erro
        emailField.focus(); // Foca no campo de email
    } else {
        emailError.style.display = 'none'; // Esconde a mensagem de erro se o campo estiver preenchido
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const emailField = document.getElementById('email');
    const senhaField = document.getElementById('senha');

    const spans = form.querySelectorAll('.span-required');

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            spans[1].textContent = 'Digite um email válido';
            spans[1].style.display = 'block'; // Mostra a mensagem de erro
            emailField.classList.add('error'); // Adiciona classe de erro
            return false;
        } else {
            spans[1].style.display = 'none'; // Esconde a mensagem de erro
            emailField.classList.remove('error'); // Remove a classe de erro
            return true;
        }
    }

    function validatePassword() {
        if (senhaField.value.length < 6) {
            spans[3].textContent = 'Senha deve possuir no mínimo 6 caracteres';
            spans[3].style.display = 'block'; // Mostra a mensagem de erro
            senhaField.classList.add('error'); // Adiciona classe de erro
            return false;
        } else {
            spans[3].style.display = 'none'; // Esconde a mensagem de erro
            senhaField.classList.remove('error'); // Remove a classe de erro
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
});
