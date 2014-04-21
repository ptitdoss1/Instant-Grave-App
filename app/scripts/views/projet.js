/*global App, Backbone*/

App.Views = App.Views || {};

(function () {
    'use strict';

    App.Views.Incentive = Backbone.View.extend({

        el: $('#projet-page'),
	    caseStudyContainer: $('#projet-page'),
	    initialize: function () {
	        $('#Incentive a.OpenProject').on('click', this.enterProject),
	        $('section[data-projet-page="Incentive"] a.OpenGalerie').on('click', this.enterGalerie);
	    },
	    enterProject: function () {
	        Backbone.history.navigate('!/case-projet/Incentive'),
	        $('#homepage').css('display', 'none'),
	        $('.GalerieSlider').iosSlider('update'),
	        $('.GalerieSlider').iosSlider('lock'),
	        $('section[data-projet-page="Incentive"]').css('display', 'block');
	    },
	    enterGalerie: function () {
	        Backbone.history.navigate('!/case-projet/Incentive/Galerie', {trigger: true}),
	        $('section[data-projet-page="Incentive"] a.OpenGalerie').css('display', 'none'),
	        $('div.content').css('width', '100%'),
	        $('.GalerieSlider').iosSlider('unlock'),
	        $('.GalerieSlider').iosSlider('update'),
	        $('section.text').css('display', 'none');
	    }

    });

})();
