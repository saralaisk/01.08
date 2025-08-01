// Esperar até que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Selecionando os elementos
    const btnChangeMessage = document.getElementById('btnChangeMessage');
    const btnChangeColor = document.getElementById('btnChangeColor');
    const btnShowAlert = document.getElementById('btnShowAlert');
    const message = document.getElementById('message');

    // Função para mudar a mensagem
    function changeMessage() {
        message.textContent = 'Você clicou no botão para mudar a mensagem!';
    }

    // Função para mudar a cor de fundo
    function changeColor() {
        document.body.style.backgroundColor = '#f0f8ff'; // Azul claro
    }

    // Função para mostrar um alerta
    function showAlert() {
        alert('Você clicou no botão de alerta!');
    }

    // Adicionando os eventos aos botões
    btnChangeMessage.addEventListener('click', changeMessage);
    btnChangeColor.addEventListener('click', changeColor);
    btnShowAlert.addEventListener('click', showAlert);
});
