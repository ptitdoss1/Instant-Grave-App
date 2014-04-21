/*global App, Backbone*/

App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.Convention = Backbone.View.extend({

        el: $('#projet-page'),
	    caseStudyContainer: $('#projet-page'),
	    name: "Convention",
	    initialize: function () {
	        // $('#Convention a.OpenProject').on('click', this.enterProject),
	        // $('section[data-projet-page="Convention"] a.OpenGalerie').on('click', this.enterGalerie);
	    },
	    enterProjectAnim: function () {
	    	Backbone.history.navigate("!/case-projet/Inventive"),
	        $('#homepage').css('display', 'none'),
	        $('section[data-projet-page="Convention"]').css('display', 'block'),
	        $('.GalerieSlider').iosSlider('update'),
	        $('.GalerieSlider').iosSlider('lock');
	    },
	    enterProject: function () {
	        Backbone.history.navigate("!/case-projet/" + this.name),
	        $('#homepage').css('display', 'none'),
	        $('section[data-projet-page="Convention"]').css('display', 'block'),
	        $('.GalerieSlider').iosSlider('update'),
	        $('.GalerieSlider').iosSlider('lock');
	    },
	    enterGalerie: function () {
	        Backbone.history.navigate("!/case-projet/" + name + "/Galerie", {trigger: true}),
	        $('section[data-projet-page="Convention"] a.OpenGalerie').css('display', 'none'),
	        $('div.content').css('width', '100%'),
	        $('section.text').css('display', 'none'),
	        $('.GalerieSlider').iosSlider('update');
	    },
	    enterFromRouter: function () {
	    	Backbone.history.navigate("!/case-projet/Inventive"),
            $('#homepage').css('display', 'none'),
            $('section[data-projet-page="Convention"]').css('display', 'block'),
            $('.GalerieSlider').iosSlider('update'),
	        $('.GalerieSlider').iosSlider('lock');
        },
        enterGalleryFromRouter: function () {
        	Backbone.history.navigate("!/case-projet/" + name + "/Galerie", {trigger: true}),
            $('#homepage').css('display', 'none'),
            $('section[data-projet-page="Convention"]').css('display', 'block'),
            this.enterGalerie();
        },

    });

})();