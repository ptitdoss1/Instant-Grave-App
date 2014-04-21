/*global App, Backbone*/

App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.Corporate = Backbone.View.extend({

        el: $('#projet-page'),
	    caseStudyContainer: $('#projet-page'),
	    name: "Corporate",
	    initialize: function () {
	        // $('#Corporate a.OpenProject').on('click', this.enterProject),
	        // $('section[data-projet-page="Corporate"] a.OpenGalerie').on('click', this.enterGalerie);
	    },
	    enterProjectAnim: function () {
	    	Backbone.history.navigate("!/case-projet/Inventive"),
	        $('#homepage').css('display', 'none'),
	        $('section[data-projet-page="Corporate"]').css('display', 'block'),
	        $('.GalerieSlider').iosSlider('update'),
	        $('.GalerieSlider').iosSlider('lock');
	    },
	    enterProject: function () {
	        Backbone.history.navigate("!/case-projet/" + this.name),
	        $('#homepage').css('display', 'none'),
	        $('section[data-projet-page="Corporate"]').css('display', 'block'),
	        $('.GalerieSlider').iosSlider('update'),
	        $('.GalerieSlider').iosSlider('lock');
	    },
	    enterGalerie: function () {
	        Backbone.history.navigate("!/case-projet/" + name + "/Galerie", {trigger: true}),
	        $('section[data-projet-page="Corporate"] a.OpenGalerie').css('display', 'none'),
	        $('div.content').css('width', '100%'),
	        $('section.text').css('display', 'none'),
	        $('.GalerieSlider').iosSlider('update');
	    },
	    enterFromRouter: function () {
            $('#homepage').css('display', 'none'),
            $('section[data-projet-page="Corporate"]').css('display', 'block'),
            $('.GalerieSlider').iosSlider('update'),
	        $('.GalerieSlider').iosSlider('lock');
        },
        enterGalleryFromRouter: function () {
            $('#homepage').css('display', 'none'),
            $('section[data-projet-page="Corporate"]').css('display', 'block'),
            this.enterGalerie();
        },

    });

})();