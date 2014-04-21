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
        this.router = new this.Routers.ApplicationRouter(),
        this.homeView = new this.Views.HomeView,
        Backbone.history.start({});
    },
    loadView: function (e) {
        return this.activeProjectView = e, this
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

        function sliderLoaded() {
            sliderResize();
        }
        function sliderLoadedGallery() {
            sliderResizeGallery();
        }

        if ('.eventSlider' == e) {
            $(e).iosSlider({
                snapToChildren: true,
                desktopClickDrag: true,
                infiniteSlider: true,
                snapSlideCenter: true,
                keyboardControls: true,
                onSliderLoaded: sliderLoaded,
                onSliderResize: sliderResize,
                navNextSelector: $('.eventSlider .next'),
                navPrevSelector: $('.eventSlider .prev')
            });
        }
        else if ('.GalerieSlider' == e) {
            $(e).iosSlider({
                snapToChildren: true,
                desktopClickDrag: true,
                infiniteSlider: true,
                snapSlideCenter: true,
                keyboardControls: true,
                onSliderUpdate: sliderLoadedGallery,
                onSliderLoaded: sliderResizeGallery,
                navNextSelector: $('.GalerieSlider .next'),
                navPrevSelector: $('.GalerieSlider .prev')
            });
        }  
        
    }
}, $(window).load(function () {
    setTimeout(function () {
        $("#loader").fadeOut(1e3), App.init(), $(document).scrollTop(0)
    }, 500)
});

$(document).ready(function () {
    'use strict';

    $(window).on('resize',function(){
        App.windowResized();
    }).trigger('resize');

    App.iosSlider('.eventSlider');
    App.iosSlider('.GalerieSlider');
});