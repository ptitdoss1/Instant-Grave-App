/*global App, Backbone*/

App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.Incentive = Backbone.View.extend({

        el: $('#projet-page'),
	    caseStudyContainer: $('#projet-page'),
	    name: "Incentive",
	    initialize: function () {
	    	"use strict";
	        // $('#Incentive a.OpenProject').on('click', this.enterProject),
	        $('section[data-projet-page="Incentive"] a.OpenGalerie').on('click', this.enterGalerieClick);
	        $('body').css('overflow', 'hidden');
	    },
	    enterProjectClick: function () {
	        Backbone.history.navigate("!/case-projet/Incentive"),
	        $('#homepage').css('display', 'none'),
	        $('section[data-projet-page="Incentive"]').css('display', 'block'),
	        $('.GalerieSlider').iosSlider('update'),
	        $('.GalerieSlider').iosSlider('lock');
	    },
	    enterGalerieClick: function () {
	        Backbone.history.navigate("!/case-projet/Incentive/Galerie");
	        $('section[data-projet-page="Incentive"] a.OpenGalerie').fadeOut(300);
	        $('section[data-projet-page="Incentive"] p').fadeOut(500);
	        $('section[data-projet-page="Incentive"] h2').fadeOut(800);
	        $('section[data-projet-page="Incentive"] .back').fadeOut(900);
		    $('section[data-projet-page="Incentive"] .gallery').removeClass('open');
            $('section[data-projet-page="Incentive"] .gallery').addClass('close');
            $('section[data-projet-page="Incentive"] .GalerieSlider').addClass('close1');
            $('section[data-projet-page="Incentive"] .text').css('display', 'none');
            $('section[data-projet-page="Incentive"] .content .back').css('display', 'block');
            setTimeout(function () {
            	$('.animateProjet').css('display', 'block');
            	$('section.gallery').css('width', '100%').one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', 
			function() {
				$('.animateProjet').addClass('open');
		    	$('.GalerieSlider').iosSlider('update');
		    });
		    }, 900);
	    },
	    enterFromRouter: function () {
            $('#homepage').css('display', 'none'),
            $('section[data-projet-page="Incentive"]').css('display', 'block'),
            $('section[data-projet-page="Incentive"] .text').css('display', 'block'),
            $('section[data-projet-page="Incentive"] a.OpenGalerie').css('display', 'inline-block');
            $('section[data-projet-page="Incentive"] .back').fadeIn(300);
	        $('section[data-projet-page="Incentive"] h2').fadeIn(500);
	        $('section[data-projet-page="Incentive"] p').fadeIn(800);
	        $('section[data-projet-page="Incentive"] a.OpenGalerie').fadeIn(900);
            $('section.gallery').css('width', '45%'),
            $('.GalerieSlider').iosSlider('update');
        },
        enterGalleryFromRouter: function () {
            $('#homepage').css('display', 'none'),
            $('.animateProjet').css('display', 'none'),
            $('section[data-projet-page="Incentive"]').css('display', 'block'),
            $('section[data-projet-page="Incentive"] .text').css('display', 'none'),
            $('section[data-projet-page="Incentive"] a.OpenGalerie').css('display', 'none'),
            $('section[data-projet-page="Incentive"] .content .back').css('display', 'block'),
            $('section.gallery').css('width', '100%'),
            $('.GalerieSlider').iosSlider('update');
        },

    });

})();