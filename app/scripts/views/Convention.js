/*global App, Backbone, _*/

App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.Convention = Backbone.View.extend({

        el: $('#projet-page'),
	    name: 'Convention',
        initialize: function () {
            var e = this;
            $('section[data-projet-page="' + this.name + '"] a.OpenGalerie').on('click', _.bind(this.enterGalerieClick, this));
            $('body').css('overflow', 'hidden');
            $('.icon-close').on('click', function () {
                e.leaveProject();
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
            App.homeView.caseStudyContainer.css("display", "block");
            $('section[data-projet-page="' + this.name + '"]').css('display', 'none');
            $('body').css('overflow', 'auto');
        }

    });

})();