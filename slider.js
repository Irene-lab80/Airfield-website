new Swiper('.swiper-container', {
// стрелки
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
},
pagination: {
    el: '.swiper-pagination',
    // буллеты
    // clickable: true,
    // dynamicBullets: true,

    type: 'fraction',
    
    renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + '/' + '<span class="' + totalClass + '"></span>';
    },
},

keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
},

sledeToClickeSlide: true,
grabCursor: true,

});