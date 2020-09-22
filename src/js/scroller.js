'use strict';

(function () {
    const scroller = document.querySelector('.js-scroller');
    const scrollBtns = scroller.querySelectorAll('div');
    let scrollToSections = document.querySelectorAll('[js-scroll-to]');
    let stepsCoords = [];
    scrollToSections.forEach((elem, index) => {
        const scrollIndex = +elem.getAttribute('js-scroll-to');
        const scrollCoord = elem.offsetTop;
        const nextElem = scrollToSections[index + 1];
        let scrollEndCoord;
        if (nextElem) { 
            scrollEndCoord = nextElem.offsetTop;
        } else {
            scrollEndCoord = 9999;
        }
        const correction = 200;
        let checkPoints = {index: scrollIndex, begin: scrollCoord - correction, end: scrollEndCoord }
        stepsCoords.push(checkPoints);
    });

    if (scroller !== null) {
        document.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            stepsCoords.forEach(elem => {
                if (currentScroll > elem.begin && currentScroll < elem.end) {
                    scrollBtns.forEach(elem => {
                        elem.classList.remove('active');
                    });
                    const currentBtn = document.querySelector(`[js-scroll="${elem.index}"]`)
                    console.log(scrollBtns);
                    console.log(currentBtn);
                    currentBtn.classList.add('active');
                }
            });
        });
    }
})();