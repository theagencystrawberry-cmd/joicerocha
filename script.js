// Carrossel de Resultados
document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');
    
    if (!carouselTrack || !slides.length) return;
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    const slidesToShow = window.innerWidth <= 768 ? 1 : 3;
    const maxIndex = totalSlides - slidesToShow;
    
    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        const translateX = -(currentIndex * (100 / slidesToShow));
        carouselTrack.style.transform = `translateX(${translateX}%)`;
    }
    
    // Função para ir para o próximo slide
    function nextSlide() {
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volta ao início
        }
        updateCarousel();
    }
    
    // Função para ir para o slide anterior
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex; // Vai para o final
        }
        updateCarousel();
    }
    
    // Event listeners para os botões
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Autoplay - move automaticamente a cada 7 segundos
    let autoplayInterval = setInterval(nextSlide, 7000);
    
    // Pausa o autoplay quando o mouse está sobre o carrossel
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoplayInterval);
        });
        
        carouselContainer.addEventListener('mouseleave', () => {
            autoplayInterval = setInterval(nextSlide, 7000);
        });
    }
    
    // Atualiza o carrossel quando a janela é redimensionada
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newSlidesToShow = window.innerWidth <= 768 ? 1 : 3;
            const newMaxIndex = totalSlides - newSlidesToShow;
            if (currentIndex > newMaxIndex) {
                currentIndex = newMaxIndex;
            }
            updateCarousel();
        }, 250);
    });
    
    // Inicializa o carrossel
    updateCarousel();
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Fecha todos os outros itens
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Abre/fecha o item clicado
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        }
    });
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 60; // Compensa a barra de notificação
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Animação da faixa baseada no scroll
    const animatedBannerContent = document.getElementById('animatedBannerContent');
    if (animatedBannerContent) {
        // Duplica o conteúdo várias vezes para garantir que preencha toda a largura
        const originalText = animatedBannerContent.textContent.trim();
        // Duplica o suficiente para cobrir toda a largura da tela (mínimo 10 repetições para garantir cobertura)
        const repetitions = Math.max(10, Math.ceil(window.innerWidth / 200) + 5);
        animatedBannerContent.textContent = (originalText + ' ⟡ ').repeat(repetitions);
        
        // Calcula a largura de uma repetição do texto original
        const tempElement = document.createElement('div');
        tempElement.style.cssText = 'position: absolute; visibility: hidden; white-space: nowrap; font-size: 18px; font-weight: 400; font-family: Poppins, sans-serif;';
        tempElement.textContent = originalText + ' ⟡ ';
        document.body.appendChild(tempElement);
        const singleRepetitionWidth = tempElement.offsetWidth;
        document.body.removeChild(tempElement);
        
        let lastScrollY = window.scrollY;
        let translateX = 0;
        const scrollSpeed = 0.75; // Velocidade da animação (metade da anterior)
        
        function updateBannerAnimation() {
            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - lastScrollY;
            
            // Move da esquerda para direita ao rolar para baixo (positivo)
            // Move da direita para esquerda ao rolar para cima (negativo)
            translateX += scrollDelta * scrollSpeed;
            
            // Mantém o texto em loop infinito
            if (Math.abs(translateX) >= singleRepetitionWidth) {
                translateX = translateX % singleRepetitionWidth;
            }
            
            animatedBannerContent.style.transform = `translateX(${translateX}px)`;
            lastScrollY = currentScrollY;
        }
        
        // Usa requestAnimationFrame para performance
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateBannerAnimation();
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        // Inicializa a posição
        updateBannerAnimation();
    }
});

