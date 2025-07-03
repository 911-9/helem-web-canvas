
// Array com mensagens motivacionais
const motivationalMessages = [
    "🌟 'O sucesso é a soma de pequenos esforços repetidos dia após dia.' - Robert Collier",
    "💪 'A tecnologia é melhor quando aproxima as pessoas.' - Matt Mullenweg", 
    "🚀 'O futuro pertence àqueles que acreditam na beleza de seus sonhos.' - Eleanor Roosevelt",
    "⭐ 'Não espere por oportunidades. Crie-as!' - Roy T. Bennett",
    "🔥 'A inovação distingue um líder de um seguidor.' - Steve Jobs",
    "🌈 'Sua limitação é apenas sua imaginação.' - Anônimo",
    "💎 'Grandes coisas nunca vêm da zona de conforto.' - Anônimo"
];

// Função para mostrar mensagem motivacional
function showMotivationalMessage() {
    const messageDiv = document.getElementById('motivationMessage');
    const button = document.getElementById('motivationBtn');
    
    // Seleciona uma mensagem aleatória
    const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
    const selectedMessage = motivationalMessages[randomIndex];
    
    // Exibe a mensagem
    messageDiv.textContent = selectedMessage;
    messageDiv.classList.remove('hidden');
    
    // Muda o texto do botão
    button.textContent = 'Clique para ver outra mensagem!';
    
    // Adiciona um efeito de rolagem suave até a mensagem
    messageDiv.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
    });
    
    // Adiciona um efeito de pulsação temporário
    messageDiv.style.animation = 'none';
    setTimeout(() => {
        messageDiv.style.animation = 'fadeIn 0.5s ease-in';
    }, 10);
}

// Adiciona efeitos visuais extras
function addVisualEffects() {
    // Efeito de hover nas seções
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Efeito de parallax suave no título
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const title = document.querySelector('h1');
        if (title) {
            title.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
    
    // Animação de entrada para elementos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Observa todas as seções para animação de entrada
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Função de inicialização
function initializePage() {
    console.log('🚀 Página de Helem Leite carregada com sucesso!');
    
    // Adiciona o evento de clique no botão
    const button = document.getElementById('motivationBtn');
    if (button) {
        button.addEventListener('click', showMotivationalMessage);
    }
    
    // Adiciona efeitos visuais
    addVisualEffects();
    
    // Adiciona um efeito de digitação no título (opcional)
    const title = document.querySelector('h1');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
    
    // Mensagem de boas-vindas no console
    console.log('%c🎉 Bem-vindo ao portfólio de Helem Leite!', 'color: #667eea; font-size: 16px; font-weight: bold;');
    console.log('%c💻 Desenvolvido com HTML, CSS e JavaScript puro', 'color: #764ba2; font-size: 12px;');
}

// Aguarda o carregamento completo da página
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}

// Adiciona funcionalidade extra: mudança de tema (bonus)
function createThemeToggle() {
    const themeButton = document.createElement('button');
    themeButton.innerHTML = '🌙';
    themeButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    `;
    
    let isDark = false;
    
    themeButton.addEventListener('click', function() {
        isDark = !isDark;
        const body = document.body;
        
        if (isDark) {
            body.style.background = 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)';
            this.innerHTML = '☀️';
        } else {
            body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            this.innerHTML = '🌙';
        }
    });
    
    themeButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    themeButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(themeButton);
}

// Adiciona o botão de tema após o carregamento da página
setTimeout(createThemeToggle, 1000);
