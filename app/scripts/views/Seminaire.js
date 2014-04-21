/*global App, Backbone*/

App.Views = App.Views || {};

(function () {
    'use strict';
    App.Views.Seminaire = Backbone.View.extend({

        el: $('#projet-page'),
	    caseStudyContainer: $('#projet-page'),
	    name: "Seminaire",
	    initialize: function () {
	        // $('#Seminaire a.OpenProject').on('click', this.enterProject),
	        // $('section[data-projet-page="Seminaire"] a.OpenGalerie').on('click', this.enterGalerie);
	    },
	    enterProjectAnim: function () {
	    	Backbone.history.navigate("!/case-projet/Inventive"),
	        $('#homepage').css('display', 'none'),
	        $('section[data-projet-page="Seminaire"]').css('display', 'block'),
	        $('.GalerieSlider').iosSlider('update'),
	        $('.GalerieSlider').iosSlider('lock');
	    },
	    enterProject: function () {
	        Backbone.history.navigate("!/case-projet/" + this.name),
	        $('#homepage').css('display', 'none'),
	        $('section[data-projet-page="Seminaire"]').css('display', 'block'),
	        $('.GalerieSlider').iosSlider('update'),
	        $('.GalerieSlider').iosSlider('lock');
	    },
	    enterGalerie: function () {
	        Backbone.history.navigate("!/case-projet/" + name + "/Galerie", {trigger: true}),
	        $('section[data-projet-page="Seminaire"] a.OpenGalerie').css('display', 'none'),
	        $('div.content').css('width', '100%'),
	        $('section.text').css('display', 'none'),
	        $('.GalerieSlider').iosSlider('update');
	    },
	    enterFromRouter: function () {
            $('#homepage').css('display', 'none'),
            $('section[data-projet-page="Seminaire"]').css('display', 'block'),
            $('.GalerieSlider').iosSlider('update'),
	        $('.GalerieSlider').iosSlider('lock');
        },
        enterGalleryFromRouter: function () {
            $('#homepage').css('display', 'none'),
            $('section[data-projet-page="Seminaire"]').css('display', 'block'),
            this.enterGalerie();
        },

    });

})();