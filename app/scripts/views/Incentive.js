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
	        $('section[data-projet-page="Incentive"] a.OpenGalerie').on('click', this.enterGalerie);
	    },
	    enterProjectAnim: function () {
	    	Backbone.history.navigate("!/case-projet/Incentive"),
	        $('#homepage').css('display', 'none'),
	        $('section[data-projet-page="Incentive"]').css('display', 'block'),
	        $('.GalerieSlider').iosSlider('update'),
	        $('.GalerieSlider').iosSlider('lock');
	    },
	    enterProject: function () {
	        Backbone.history.navigate("!/case-projet/Incentive"),
	        $('#homepage').css('display', 'none'),
	        $('section[data-projet-page="Incentive"]').css('display', 'block'),
	        $('.GalerieSlider').iosSlider('update'),
	        $('.GalerieSlider').iosSlider('lock');
	    },
	    enterGalerie: function () {
	        Backbone.history.navigate("!/case-projet/Incentive/Galerie", {trigger: true});
	        $('section[data-projet-page="Incentive"] a.OpenGalerie').fadeOut(300);
	        $('section[data-projet-page="Incentive"] p').fadeOut(500);
	        $('section[data-projet-page="Incentive"] h2').fadeOut(800);
	        $('section[data-projet-page="Incentive"] .back').fadeOut(900);
		    $('section[data-projet-page="Incentive"] .gallery').removeClass('open');
            $('section[data-projet-page="Incentive"] .gallery').addClass('close');
            $('section[data-projet-page="Incentive"] .GalerieSlider').addClass('close1');
            $('section[data-projet-page="Incentive"] .slider').addClass('close1');
            $('section[data-projet-page="Incentive"] .text').css('display', 'none');
            setTimeout(function () {
            	$('.animateProjet').css('display', 'block');
            	$('section.gallery').css('width', '100%').one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', 
			function() {
		    	$('.GalerieSlider').iosSlider('update');
            	$('.animateProjet').addClass('open');
            	$('.animateProjet').css('display', 'none');
		    });
		    }, 1e3);
	    },
	    enterFromRouter: function () {
            $('#homepage').css('display', 'none'), this.enterProject();
        },
        enterGalleryFromRouter: function () {
            $('#homepage').css('display', 'none'), this.enterGalerie();
        },

    });

})();