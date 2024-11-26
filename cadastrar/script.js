// Mostra mensagens na tela por 3 segundos
function criarMensagem(texto) {
    alert(texto); // Simples para iniciantes
}

// Alterna entre os formulários
document.getElementById('irParaCadastro').onclick = function () {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('cadastroContainer').style.display = 'block';
};

document.getElementById('irParaLogin').onclick = function () {
    document.getElementById('cadastroContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
};

// Limpa os campos do formulário
function limparCampos(formId) {
    document.getElementById(formId).reset();
}

// Cadastro
document.getElementById('cadastroForm').onsubmit = function (e) {
    e.preventDefault();
    const idade = document.getElementById('idade').value;
    const nome = document.getElementById('nome').value;
    if (idade < 1 || idade > 18) {
        criarMensagem('Idade deve ser entre 1 e 18 anos');
    } else {
        criarMensagem(`Bem-vindo, ${nome}! Cadastro realizado!`);
        limparCampos('cadastroForm');
        document.getElementById('irParaLogin').click();
    }
};

// Login
document.getElementById('loginForm').onsubmit = function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    if (email.includes('@')) {
        criarMensagem('Login realizado!');
        limparCampos('loginForm');
    } else {
        criarMensagem('Email inválido!');
    }
};

// Botões cancelar 
document.getElementById('cancelarCadastro').onclick = function () {
    limparCampos('cadastroForm');
};

document.getElementById('cancelarLogin').onclick = function () {
    limparCampos('loginForm');
};