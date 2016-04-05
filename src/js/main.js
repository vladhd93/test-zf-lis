'use strict';

//import components

//= components/toggleSlide.js

var slidePanel = new SlidePanel({
    panel: document.querySelector("[data-component='slide-panel']"),
    button: document.querySelector("[data-component='trigger-panel-btn']"),
    siteWrap: null
});


var slideMenu = new SlidePanel({
    panel: document.querySelector("[data-component='slide-menu']"),
    button: document.querySelector("[data-component='trigger-menu-btn']"),
    siteWrap: null
});

window.addEventListener("resize", handlerResizer);


function handlerResizer(event) {
    var sidePanel = document.querySelector("[data-component='slide-menu']");
    var sideBtn = document.querySelector("[data-component='trigger-menu-btn']");
    if (window.matchMedia("(min-width: 767px)").matches) {
        sidePanel.classList.remove('open');
        sideBtn.classList.remove('active');
    }
}


