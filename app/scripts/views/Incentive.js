/*global App, Backbone*/

App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.Incentive = Backbone.View.extend({

        el: $('#projet-page'),
	    name: 'Incentive',
	    initialize: function () {
	        $('section[data-projet-page="Incentive"] a.OpenGalerie').on('click', this.enterGalerieClick);
	        $('body').css('overflow', 'hidden');
	    },
	    enterProjectClick: function () {
	        Backbone.history.navigate('!/case-projet/Incentive'),
	        $('#homepage').css('display', 'none'),
	        $('section[data-projet-page="' + this.name + '"]').css('display', 'block'),
	        $('.GalerieSlider').iosSlider('update'),
	        $('.GalerieSlider').iosSlider('lock');
	    },
	    enterGalerieClick: function () {
	        Backbone.history.navigate('!/case-projet/Incentive/Galerie'),
	        $('section[data-projet-page="' + this.name + '"] .text').css('display', 'none'),
	        $('section[data-projet-page="' + this.name + '"] a.OpenGalerie').css('display', 'none'),
            $('section[data-projet-page="' + this.name + '"] .content .back').css('display', 'block'),
            $('section.gallery').css('width', '100%'),
		    $('.GalerieSlider').iosSlider('update');
	    },
	    enterFromRouter: function () {
            $('#homepage').css('display', 'none'),
            $('section[data-projet-page="' + this.name + '"]').css('display', 'block'),
            $('section[data-projet-page="' + this.name + '"] .text').css('display', 'block'),
            $('section[data-projet-page="' + this.name + '"] .content .back').css('display', 'none'),
            $('section[data-projet-page="' + this.name + '"] a.OpenGalerie').css('display', 'inline-block'),
            $('section.gallery').css('width', '45%'),
            $('.GalerieSlider').iosSlider('update');
        },
        enterGalleryFromRouter: function () {
            $('#homepage').css('display', 'none'),
            $('.animateProjet').css('display', 'none'),
            $('section[data-projet-page="' + this.name + '"]').css('display', 'block'),
            $('section[data-projet-page="' + this.name + '"] .text').css('display', 'none'),
            $('section[data-projet-page="' + this.name + '"] a.OpenGalerie').css('display', 'none'),
            $('section[data-projet-page="' + this.name + '"] .content .back').css('display', 'block'),
            $('section.gallery').css('width', '100%'),
            $('.GalerieSlider').iosSlider('update');
        },

    });

})();