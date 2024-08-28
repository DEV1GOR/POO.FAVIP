document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const nomeField = document.getElementById('nome');
    const emailField = document.getElementById('email');
    const telefoneField = document.getElementById('telefone');
    const numeroDeRegistroField = document.getElementById('numero_de_registro');
    const senhaField = document.getElementById('senha');
    const confirmSenhaField = document.getElementById('confirmSenha');

    const spans = form.querySelectorAll('.span-required');

    function validateName() {
        if (nomeField.value.length < 3) {
            spans[0].textContent = 'Nome deve possuir no mínimo 3 caracteres';
            spans[0].style.display = 'block'; // Mostra a mensagem de erro
            nomeField.classList.add('error'); // Adiciona classe de erro
            return false;
        } else {
            spans[0].style.display = 'none'; // Esconde a mensagem de erro
            nomeField.classList.remove('error'); // Remove a classe de erro
            return true;
        }
    }

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

    function validateTelefone() {
        const telefoneRegex = /^\d{11}$/; // codigo para numero ter apenas 11 digitos
        if (!telefoneRegex.test(telefoneField.value)) {
            spans[2].textContent = 'Digite um telefone válido com 11 dígitos';
            spans[2].style.display = 'block'; // Mostra a mensagem de erro
            telefoneField.classList.add('error'); // Adiciona classe de erro
            return false;
        } else {
            spans[2].style.display = 'none'; // Esconde a mensagem de erro
            telefoneField.classList.remove('error'); // Remove a classe de erro
            return true;
        }
    }

    function validateNumeroDeRegistro() {
        if (numeroDeRegistroField.value.length < 1) {
            spans[3].textContent = 'Número de Registro é obrigatório';
            spans[3].style.display = 'block'; // Mostra a mensagem de erro
            numeroDeRegistroField.classList.add('error'); // Adiciona classe de erro
            return false;
        } else {
            spans[3].style.display = 'none'; // Esconde a mensagem de erro
            numeroDeRegistroField.classList.remove('error'); // Remove a classe de erro
            return true;
        }
    }

    function validatePassword() {
        if (senhaField.value.length < 6) {
            spans[4].textContent = 'Senha deve possuir no mínimo 6 caracteres';
            spans[4].style.display = 'block'; // Mostra a mensagem de erro
            senhaField.classList.add('error'); // Adiciona classe de erro
            return false;
        } else {
            spans[4].style.display = 'none'; // Esconde a mensagem de erro
            senhaField.classList.remove('error'); // Remove a classe de erro
            return true;
        }
    }

    function validateConfirmPassword() {
        if (senhaField.value !== confirmSenhaField.value) {
            spans[5].textContent = 'Senhas devem ser compatíveis';
            spans[5].style.display = 'block'; // Mostra a mensagem de erro
            confirmSenhaField.classList.add('error'); // Adiciona classe de erro
            return false;
        } else {
            spans[5].style.display = 'none'; // Esconde a mensagem de erro
            confirmSenhaField.classList.remove('error'); // Remove a classe de erro
            return true;
        }
    }

    form.addEventListener('submit', (event) => {
        let valid = true;

        valid = validateName() &&
                validateEmail() &&
                validateTelefone() &&
                validateNumeroDeRegistro() &&
                validatePassword() &&
                validateConfirmPassword();

        if (!valid) {
            event.preventDefault(); // Impede o envio do formulário se a validação falhar
        }
    });
});