var carousels = document.querySelectorAll('.c-carousel');

carousels.forEach(carousel => {
    var carouselMount = new Splide(carousel, {
        type: 'loop',
        perPage: 3, // Exibe 3 cards por vez em telas grandes
        arrows: true,
        paginationKeyboard: true,
        breakpoints: {
            1024: {
                perPage: 2, // Reduz para 2 cards em telas médias
            },
            768: {
                perPage: 1, // Exibe apenas 1 card em telas pequenas
                arrows: false // Remove setas para mobile
            }
        }
    });
    carouselMount.mount();
});
