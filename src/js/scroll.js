'use strict';

(function() {
    const scrollBtns = document.querySelectorAll('[js-scroll]');
    scrollBtns.forEach((elem) => {
        elem.addEventListener('click', (ev) => {
            const scrollIndex = +elem.getAttribute('js-scroll');
            const elemsToScroll = document.querySelectorAll('[js-scroll-to]');
            elemsToScroll.forEach((elem) => {
                const scrollToIndex = +elem.getAttribute('js-scroll-to');
                if (scrollIndex == scrollToIndex) {
                    const coordToScroll = elem.offsetTop;
                    const pixelsForCenter = 100;
                    window.scrollTo({
                        top: coordToScroll - pixelsForCenter,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
})();