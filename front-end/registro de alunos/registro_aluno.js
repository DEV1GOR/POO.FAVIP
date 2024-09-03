document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const nomeField = document.getElementById('nome');
    const emailField = document.getElementById('email');
    const matriculaField = document.getElementById('matricula');
    const senhaField = document.getElementById('senha');
    const confirmSenhaField = document.getElementById('confirmSenha');
    const dataNascimentoField = document.getElementById('dataNascimento');

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

    function validateMatricula() {
        if (matriculaField.value.length < 1) {
            spans[2].textContent = 'Matrícula é obrigatória';
            spans[2].style.display = 'block'; // Mostra a mensagem de erro
            matriculaField.classList.add('error'); // Adiciona classe de erro
            return false;
        } else {
            spans[2].style.display = 'none'; // Esconde a mensagem de erro
            matriculaField.classList.remove('error'); // Remove a classe de erro
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

    function validateConfirmPassword() {
        if (senhaField.value !== confirmSenhaField.value) {
            spans[4].textContent = 'Senhas devem ser compatíveis';
            spans[4].style.display = 'block'; // Mostra a mensagem de erro
            confirmSenhaField.classList.add('error'); // Adiciona classe de erro
            return false;
        } else {
            spans[4].style.display = 'none'; // Esconde a mensagem de erro
            confirmSenhaField.classList.remove('error'); // Remove a classe de erro
            return true;
        }
    }

    function validateDate() {
        if (!dataNascimentoField.value) {
            spans[5].textContent = 'Data de nascimento é obrigatória';
            spans[5].style.display = 'block'; // Mostra a mensagem de erro
            dataNascimentoField.classList.add('error'); // Adiciona classe de erro
            return false;
        } else {
            spans[5].style.display = 'none'; // Esconde a mensagem de erro
            dataNascimentoField.classList.remove('error'); // Remove a classe de erro
            return true;
        }
    }

    form.addEventListener('submit', (event) => {
        let valid = true;

        valid &= validateName();
        valid &= validateEmail();
        valid &= validateMatricula();
        valid &= validatePassword();
        valid &= validateConfirmPassword();
        valid &= validateDate();

        if (!valid) {
            event.preventDefault(); // Impede o envio do formulário se a validação falhar
        }
    });
});