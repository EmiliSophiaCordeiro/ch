// Botão "Comece Agora"
const startButton = document.querySelector('#hero button');
startButton.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <h2>Bem-vindo ao Code Help.ds!</h2>
        <p>Para começar, explore nossos recursos ou junte-se à nossa comunidade.</p>
        <button class="close-modal">Fechar</button>
    `;
    document.body.appendChild(modal);

    const closeModalButton = modal.querySelector('.close-modal');
    closeModalButton.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
});

// Botão "Acesse o Fórum"
const forumButton = document.querySelector('#community button');
forumButton.addEventListener('click', () => {
    alert('Em breve, você poderá acessar o fórum da comunidade!');
    // window.location.href = 'forum.html'; // Substitua por um link real
});

// Exemplo de animação com JavaScript
const featuresSection = document.getElementById('features');
featuresSection.addEventListener('mouseover', () => {
    featuresSection.classList.add('animated');
});
featuresSection.addEventListener('mouseout', () => {
    featuresSection.classList.remove('animated');
});

// Mudar o conteúdo de uma seção ao clicar em um botão
const showMoreButton = document.querySelector('#about button');
const hiddenContent = document.querySelector('#about .hidden-content');

showMoreButton.addEventListener('click', () => {
    hiddenContent.style.display = 'block';
    showMoreButton.style.display = 'none';
});

// Mostrar/ocultar elementos com base em uma condição
const toggleButton = document.querySelector('#features button');
const featuresList = document.querySelector('#features .features-list');

toggleButton.addEventListener('click', () => {
    if (featuresList.style.display === 'none' || featuresList.style.display === '') {
        featuresList.style.display = 'block';
        toggleButton.textContent = 'Ocultar Recursos';
    } else {
        featuresList.style.display = 'none';
        toggleButton.textContent = 'Mostrar Recursos';
    }
});

// Criar um menu responsivo
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
