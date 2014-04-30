/*global App, Backbone, _*/

App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.Convention = Backbone.View.extend({

        el: $('#projet-page'),
	    name: 'Convention',
        initialize: function () {
            var e = this;
            $('section[data-projet-page="' + e.name + '"] a.OpenGalerie').on('click', _.bind(e.enterGalerieClick, e));
            $('body').css('overflow', 'hidden');
            $('.text .icon-close').on('click', function () {
                e.leaveProject();
            });
            $('.content .icon-close').on('click', function () {
                e.leaveGallery();
            });
            $('section[data-projet-page="' + e.name + '"] .before').on('click', function () {
                $('section[data-projet-page="' + e.name + '"]').css('display', 'none');
                Backbone.history.navigate('!/case-projet/Corporate');
                new App.Views.Corporate().enterFromRouter();
            });
            $('section[data-projet-page="' + e.name + '"] .after').on('click', function () {
                $('section[data-projet-page="' + e.name + '"]').css('display', 'none');
                Backbone.history.navigate('!/case-projet/Studio');
                new App.Views.Studio().enterFromRouter();
            });
        },
        enterProjectClick: function () {
            Backbone.history.navigate('!/case-projet/'+ this.name);
            $('#homepage').css('display', 'none');
            $('section[data-projet-page="' + this.name + '"]').css('display', 'block');
            $('section[data-projet-page="' + this.name + '"] .GalerieSlider').iosSlider('update');
        },
        enterGalerieClick: function () {
            Backbone.history.navigate('!/case-projet/' + this.name + '/Galerie');
            $('section[data-projet-page="' + this.name + '"] .text').css('display', 'none');
            $('section[data-projet-page="' + this.name + '"] a.OpenGalerie').css('display', 'none');
            $('section[data-projet-page="' + this.name + '"] .content .gallery-back').css('display', 'block');
            $('section[data-projet-page="' + this.name + '"] section.gallery').css('width', '100%');
            $('section[data-projet-page="' + this.name + '"] .GalerieSlider').iosSlider('update');
        },
        enterFromRouter: function () {
            $('#homepage').css('display', 'none');
            $('section[data-projet-page="' + this.name + '"]').css('display', 'block');
            $('section[data-projet-page="' + this.name + '"] .text').css('display', 'block');
            $('section[data-projet-page="' + this.name + '"] .content .gallery-back').css('display', 'none');
            $('section[data-projet-page="' + this.name + '"] a.OpenGalerie').css('display', 'inline-block');
            $('section[data-projet-page="' + this.name + '"] section.gallery').css('width', '45%');
            $('section[data-projet-page="' + this.name + '"] .GalerieSlider').iosSlider('update');
        },
        enterGalleryFromRouter: function () {
            $('#homepage').css('display', 'none');
            $('.animateProjet').css('display', 'none');
            $('section[data-projet-page="' + this.name + '"]').css('display', 'block');
            $('section[data-projet-page="' + this.name + '"] .text').css('display', 'none');
            $('section[data-projet-page="' + this.name + '"] a.OpenGalerie').css('display', 'none');
            $('section[data-projet-page="' + this.name + '"] .content .gallery-back').css('display', 'block');
            $('section[data-projet-page="' + this.name + '"] section.gallery').css('width', '100%');
            $('section[data-projet-page="' + this.name + '"] .GalerieSlider').iosSlider('update');
        },
        leaveProject: function () {
            App.homeView.caseStudyContainer.css('display', 'block');
            $('.eventSlider').iosSlider('update');
            $('.eventSlider').iosSlider('goToSlide', 3);
            $('section[data-projet-page="' + this.name + '"]').css('display', 'none');
            $('body').css('overflow', 'auto');
            Backbone.history.navigate('events');
        },
        leaveGallery: function () {
            Backbone.history.navigate('!/case-projet/'+ this.name);
            $('section[data-projet-page="Incentive"]').css('display', 'none');
            $('section[data-projet-page="Studio"]').css('display', 'none');
            $('section[data-projet-page="Corporate"]').css('display', 'none');
            this.enterFromRouter();
        }
    });

})();