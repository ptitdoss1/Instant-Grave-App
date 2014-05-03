/*global App, Backbone*/

window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    homeView: null,
    activeProjectView: null,
    init: function () {
        'use strict';
        this.router = new this.Routers.ApplicationRouter();
        this.homeView = new this.Views.Homeview();
        Backbone.history.start();
    },
    loadView: function (e) {
        'use strict';
        return this.activeProjectView = e, this;
    },
    windowResized: function(){
        'use strict';
        this.windowHeight = $(window).height();
        this.navigationHeight = $('#navigation').innerHeight();

        $('#header').height(this.windowHeight - this.navigationHeight);
        $('#projet-page section.gallery').innerHeight(this.windowHeight);
        $('#projet-page section.text').innerHeight(this.windowHeight);
    },
    iosSlider: function (e) {
        'use strict';

        function sliderResize() {
            var setHeight = $('.eventSlider .item:eq(0) img').outerHeight(true);
            $(e).css({
                height: setHeight
            });
        }
        
        function sliderResizeGallery() {
            var setWidth = $('.gallery').outerWidth();
            $(e).css({
                width: setWidth
            });
        }
        function slideContentChange(e) {
            $(e.sliderObject).parent().find('.iosSliderButtons .button').removeClass('selected');
            $(e.sliderObject).parent().find('.iosSliderButtons .button:eq(' + (e.currentSlideNumber - 1) + ')').addClass('selected');
        }

        function sliderLoaded() {
            sliderResize();
            $(e.sliderObject).parent().find('.iosSliderButtons .button').removeClass('selected');
            $(e.sliderObject).parent().find('.iosSliderButtons .button:eq(' + (e.currentSlideNumber - 1) + ')').addClass('selected');
        }
        function sliderLoadedGallery() {
            sliderResizeGallery();
        }

        if ('.eventSlider' === e) {
            $(e).iosSlider({
                snapToChildren: true,
                desktopClickDrag: true,
                infiniteSlider: true,
                snapSlideCenter: true,
                keyboardControls: true,
                onSliderLoaded: sliderLoaded,
                onSliderResize: sliderResize,
                onSlideChange: slideContentChange,
                navSlideSelector: $('.iosSliderButtons .button'),
                navNextSelector: $('.eventSlider .next'),
                navPrevSelector: $('.eventSlider .prev')
            });
        }
        else if ('.GalerieSlider' === e) {
            $(e).iosSlider({
                snapToChildren: true,
                desktopClickDrag: true,
                infiniteSlider: false,
                snapSlideCenter: true,
                keyboardControls: true,
                onSliderUpdate: sliderLoadedGallery,
                onSliderLoaded: sliderResizeGallery,
                navNextSelector: $('.GalerieSlider .next'),
                navPrevSelector: $('.GalerieSlider .prev')
            });
        }
    }
};

$(window).load(function () {
    'use strict';
    setTimeout(function () {
        App.init();
        $(document).scrollTop(0);
        $('#loader').fadeOut(1e3);
    }, 500);
});

$(document).ready(function () {
    'use strict';

    $(window).on('resize',function(){
        App.windowResized();
    }).trigger('resize');

    App.iosSlider('.eventSlider');
    App.iosSlider('.GalerieSlider');
});