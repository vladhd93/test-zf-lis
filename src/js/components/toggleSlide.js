function SlidePanel(options) {
    this.panel = options.panel;
    this.triggerElement = options.button;
    this.siteWrap = options.siteWrap;
    this.attachEvents();
}

SlidePanel.prototype = {
    attachEvents: function () {
        var _self = this;
        this.triggerElement.addEventListener("click", function (event) {
            var target = event.target;
            target.classList.toggle('active');
            _self.toggleMenu();

        });
    },

    toggleMenu: function () {
        // Open the menu element
        this.panel.classList.toggle("open");
        // Slide the site wrap
        if(!this.siteWrap == null){
            this.siteWrap.classList.toggle('open');
        }


        if (this.panel.classList.contains('left')) {
            if (!this.siteWrap == null) {
                this.siteWrap.classList.toggle('left');
            }
        }
    }
};



